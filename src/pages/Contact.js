import NavBar from '../components/NavBar';
import './Contact.scss';

import contactMe from '../picture/contact/contact-me.png';

function Contact() {
  return (
    <div className="contact">
      <NavBar color="#9D94FF"></NavBar>
      <div className="container">
        <div className="main">
          <img src={contactMe} alt="" className="contact-me"></img>
          <p className="content">
            Phone : (+66) 89-962-4272<br></br>
            <br></br>
            Email: yanisa.18n@gmail.com<br></br>
            <br></br>
            Facebook: Yanisa Bhisitcharoentat<br></br>
            <br></br>
            Instagram: @neyinu8
          </p>
          <div className="right-bubble"></div>
          <div className="left-bubble"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
