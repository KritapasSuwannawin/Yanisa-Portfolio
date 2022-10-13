import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NavBar from '../../components/navBar/NavBar';
import './Certificate.scss';

const certificate = process.env.REACT_APP_storageURL + 'others/certificate/certificate.png'.replaceAll('/', '%2F') + '?alt=media';

function Certificate() {
  const dataCertificate = useSelector((store) => store.data.dataCertificate);

  const [certificateUI, setCertificateUI] = useState([]);

  useEffect(() => {
    const certificateUI = dataCertificate.map((obj) => <img key={obj.id} src={obj.img_url} alt="" className="picture"></img>);
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
