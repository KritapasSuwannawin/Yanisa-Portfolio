import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import pathToUrl from '../../utils/pathToUrl';

import NavBar from '../../components/navBar/NavBar';
import './Certificate.scss';

const certificate = pathToUrl('others/certificate/certificate.png');

function Certificate() {
  const dataCertificate = useSelector((store) => store.data.dataCertificate);

  const [certificateUI, setCertificateUI] = useState([]);

  useEffect(() => {
    const certificateUI = dataCertificate.map((obj) => (
      <a href={obj.href} target="_blank" rel="noreferrer">
        <img key={obj.id} src={obj.img_url} alt="" className="picture"></img>
      </a>
    ));
    setCertificateUI(certificateUI);
  }, [dataCertificate]);

  return (
    <div className="certificate">
      <NavBar color="#6154F2"></NavBar>
      <div className="container">
        <div className="main">
          <img src={certificate} alt="" className="title"></img>
          {certificateUI}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
