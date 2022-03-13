import { Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificate from './pages/Certificate';
import Work from './pages/Work';

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
