import NavBar from '../../components/navBar/NavBar';
import './Contact.scss';

const contactMe = process.env.REACT_APP_storageURL + 'others/contact/contact-me.png'.replaceAll('/', '%2F') + '?alt=media';

function Contact() {
  return (
    <div className="contact">
      <NavBar color="#9D94FF"></NavBar>
      <div className="container">
        <div className="main">
          <img src={contactMe} alt="" className="contact-me"></img>
          <div className="content">
            <p>Phone : (+66) 89-962-4272</p>
            <p>
              Email:{' '}
              <a href="mailto:yanisa.18n@gmail.com" target="_blank" rel="noreferrer">
                yanisa.18n@gmail.com
              </a>
            </p>
            <p>
              Linkedin:{' '}
              <a href="https://www.linkedin.com/in/yanisa-bhisitcharoentat" target="_blank" rel="noreferrer">
                Yanisa Bhisitcharoentat
              </a>
            </p>
            <p>
              Facebook:{' '}
              <a href="https://www.facebook.com/yanisa.new.10" target="_blank" rel="noreferrer">
                Yanisa Bhisitcharoentat
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a href="https://www.instagram.com/neyinu8" target="_blank" rel="noreferrer">
                neyinu8
              </a>
            </p>
          </div>
          <div className="right-bubble"></div>
          <div className="left-bubble"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
