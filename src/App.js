import { Route, Redirect } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';
import Work from './pages/Work';

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

async function getFirestoreData() {
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
    await getDocs(collection(firestore, 'home')),
    await getDocs(collection(firestore, 'work')),
    await getDocs(collection(firestore, 'certificate')),
  ]);

  const dataArr = querySnapshotArr.map((querySnapshot) => {
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    data.sort(compare);

    return data;
  });

  return dataArr;
}

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
