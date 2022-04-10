import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import NavBar from '../components/NavBar';
import './Home.scss';

import webLion from '../picture/home/lion-web.png';
import welcome from '../picture/home/welcome.png';
import profile from '../picture/home/profile.png';
import project1 from '../picture/home/project-1.png';
import project2 from '../picture/home/project-2.png';
import ui from '../picture/home/ui.png';
import poster from '../picture/home/poster.png';
import shortVideo from '../picture/home/short-video.png';
import gif from '../picture/home/gif.gif';
import graphic from '../picture/home/graphic.png';
import other from '../picture/home/other.gif';

function Home() {
  return (
    <div className="home">
      <NavBar color="#6154f2"></NavBar>
      <div className="home-hero">
        <div className="container">
          <div className="main">
            <div className="left">
              <p className="title">
                Yanisa <span className="no-wrap">Bhisitcharoentat ,</span>
                <br></br>
                Graphic Designer &<br></br>
                UX UI Designer
              </p>
              <p className="content">
                “ How well we communicate is determined not by<br></br>
                how well we say things, but how well we are understood. ”<br></br>- Andrew Grove
              </p>
              <Link to="/contact" className="button">
                Contact Me
              </Link>
            </div>
            <div className="right">
              <div className="bubble">
                <img className="welcome" src={welcome} alt=""></img>
                <img className="profile" src={profile} alt=""></img>
                <div className="sub-bubble"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="clip-path"></div>
      </div>
      <div className="home-seperator">
        <div className="web-seperator"></div>
        <img src={webLion} alt="" className="web-lion"></img>
      </div>
      <div className="home-work">
        <div className="nav">
          <p className="title">My Design Works</p>
          <HashLink to="/works#works" className="button">
            See All Works
          </HashLink>
        </div>
        <div className="main">
          <HashLink to="/works#ux-ui-design" className="category">
            <img src={ui} alt="" className="bubble"></img>
            <p className="name">UX UI Designs</p>
          </HashLink>
          <HashLink to="/works#poster" className="category">
            <img src={poster} alt="" className="bubble"></img>
            <p className="name">Poster</p>
          </HashLink>
          <HashLink to="/works#short-video" className="category">
            <img src={shortVideo} alt="" className="bubble"></img>
            <p className="name">Short Video</p>
          </HashLink>
          <HashLink to="/works#gif" className="category">
            <img src={gif} alt="" className="bubble"></img>
            <p className="name">GIF</p>
          </HashLink>
          <HashLink to="/works#graphic-contents" className="category">
            <img src={graphic} alt="" className="bubble"></img>
            <p className="name">Graphic Contents</p>
          </HashLink>
          <HashLink to="/works#others" className="category">
            <img src={other} alt="" className="bubble"></img>
            <p className="name">Others</p>
          </HashLink>
          <HashLink to="/works#works" className="button">
            See All Works
          </HashLink>
        </div>
      </div>
      <div className="home-project">
        <div className="left">
          <div className="bubble-container-main">
            <div className="bubble-container-top-left">
              <img src={project2} alt="" className="bubble-top-left"></img>
            </div>
            <div className="bubble-top-right"></div>
            <div className="bubble-container-bottom-right">
              <img src={project1} alt="" className="bubble-bottom-right"></img>
            </div>
            <div className="bubble-bottom-left"></div>
          </div>
        </div>
        <div className="right">
          <p className="title">
            Available and<br></br>Ready for Project!
          </p>
          <p className="content">
            If you are looking for someone who is adaptive,<br></br>
            fast-learning, and problem-solving.<br></br>
            I’m the right fit for you :-)
          </p>
          <a href="mailto:yanisa.18n@gmail.com" className="button">
            Send Inquiry
          </a>
        </div>
      </div>
      <div className="home-contact">
        <form className="container" method="POST" data-netlify="true">
          <p className="title">Contact me for more details</p>
          <p className="content">
            If you have any question, please feel free to leave your email and question!<br></br>I will response as soon as possible.
          </p>
          <input placeholder="Enter your e-mail address" className="email-input" name="email"></input>
          <textarea placeholder="Enter your messages" className="message-input" name="message"></textarea>
          <button type="submit" className="button">
            Submit
          </button>
          <div className="right-bubble"></div>
          <div className="left-bubble"></div>
        </form>
      </div>
      <div className="home-footer">
        <p className="title">
          <span className="bold">Yanisa</span> New
        </p>
        <p className="content">A passionate graphic and web designer</p>
        <div className="button-container">
          <a href="https://www.facebook.com/yanisa.new.10" target="_blank" rel="noreferrer" className="button">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="mailto:yanisa.18n@gmail.com" className="button">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.instagram.com/neyinu8" target="_blank" rel="noreferrer" className="button">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
