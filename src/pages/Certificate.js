import NavBar from '../components/NavBar';
import './Certificate.scss';

import certificate from '../picture/certificate/certificate.png';
import c1 from '../picture/certificate/c1.jpg';
import c2 from '../picture/certificate/c2.jpg';
import c3 from '../picture/certificate/c3.jpg';

function Certificate() {
  return (
    <div className="certificate">
      <NavBar color="#6154F2"></NavBar>
      <div className="container">
        <div className="main">
          <img src={certificate} alt="" className="title"></img>
          <img src={c1} alt="" className="picture"></img>
          <img src={c2} alt="" className="picture"></img>
          <img src={c3} alt="" className="picture"></img>
        </div>
      </div>
    </div>
  );
}

export default Certificate;
