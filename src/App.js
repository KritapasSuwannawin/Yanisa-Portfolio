import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Certificate from './pages/certificate/Certificate';
import Work from './pages/work/Work';

import { dataActions } from './store/dataSlice';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebase_apiKey,
  authDomain: process.env.REACT_APP_firebase_authDomain,
  projectId: process.env.REACT_APP_firebase_projectId,
  storageBucket: process.env.REACT_APP_firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
  appId: process.env.REACT_APP_firebase_appId,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage();

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      if (window.location.hostname === 'localhost') {
        return;
      }

      const docRef = doc(firestore, 'statistic', 'website');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const { view_count } = docSnap.data();

        updateDoc(docRef, {
          view_count: view_count + 1,
        });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      function compare(a, b) {
        if (a.id < b.id) {
          return -1;
        }

        if (a.id > b.id) {
          return 1;
        }

        return 0;
      }

      const querySnapshotArr = await Promise.all([
        getDocs(collection(firestore, 'home')),
        getDocs(collection(firestore, 'work')),
        getDocs(collection(firestore, 'certificate')),
      ]);

      const dataArr = querySnapshotArr.map((querySnapshot) => {
        const data = [];

        querySnapshot.forEach((doc) => {
          data.push(doc.data());
        });

        data.sort(compare);

        return data;
      });

      dispatch(dataActions.initializeState(dataArr));

      dataArr.forEach(async (arr, i) => {
        const url = await Promise.all(arr.map((obj) => getDownloadURL(ref(storage, obj.img_path))));
        dispatch(dataActions.setImgUrl({ url, i }));
      });
    })();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/certificates" element={<Certificate></Certificate>}></Route>
      <Route path="/works" element={<Work></Work>}></Route>
      <Route path="/*" element={<Navigate replace to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
