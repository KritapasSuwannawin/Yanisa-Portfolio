import { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';
import Work from './pages/Work';

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
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/about">
        <About></About>
      </Route>
      <Route exact path="/contact">
        <Contact></Contact>
      </Route>
      <Route exact path="/certificates">
        <Certificate></Certificate>
      </Route>
      <Route exact path="/works">
        <Work></Work>
      </Route>
      <Route path="/">
        <Redirect to="/"></Redirect>
      </Route>
    </Switch>
  );
}

export default App;
