import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import pathToUrl from '../../utils/pathToUrl';

import NavBar from '../../components/navBar/NavBar';
import './Home.scss';

const webLion = pathToUrl('others/home/lion-web.png');
const welcome = pathToUrl('others/home/welcome.png');
const profile = pathToUrl('others/home/profile.png');
const project1 = pathToUrl('others/home/project-1.png');
const project2 = pathToUrl('others/home/project-2.png');

function Home() {
  const dataHome = useSelector((store) => store.data.dataHome);

  const [workCategoryUI, setWorkCategoryUI] = useState([]);

  useEffect(() => {
    const workCategoryUI = dataHome.map((obj) => (
      <HashLink key={obj.id} to={`/works#${obj.link_to}`} className="category">
        <img src={obj.img_url} alt="" className="bubble"></img>
        <p className="name">{obj.name}</p>
      </HashLink>
    ));
    setWorkCategoryUI(workCategoryUI);
  }, [dataHome]);

  return (
    <div className="home">
      <NavBar color="#6154F2"></NavBar>
      <div className="home-hero">
        <div className="container">
          <div className="main">
            <div className="left">
              <p className="title">
                Yanisa{' '}
                <span className="no-wrap">
                  Bhisitcharoentat<span className="space"> </span>,
                </span>
                <br></br>
                Product Owner &amp;
                <br></br>
                UX/UI Designer
              </p>
              <p className="content">
                “ How well we communicate is determined not by<br></br>
                how well we say things, but how well we are understood. ”<br></br>- Andrew Grove
              </p>
              <p className="content mobile">
                “ The best way to predict the future is to create it ”<br></br>- Abraham Lincoln
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
          {workCategoryUI}
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
            If you are looking for someone who is adaptive, fast-learning, and problem-solving. I’m the right fit for you :-)
          </p>
          <a href="mailto:yanisa.18n@gmail.com" className="button">
            Send Inquiry
          </a>
        </div>
      </div>
      <div className="home-contact">
        <form className="container" method="post" name="contact">
          <input type="hidden" name="form-name" value="contact"></input>
          <p className="title">Contact me for more details</p>
          <p className="content">
            If you have any question, please feel free to leave your email and question!<br></br> I will response as soon as possible.
          </p>
          <input type="email" placeholder="Enter your email address" className="email-input" name="email" required></input>
          <textarea placeholder="Enter your messages" className="message-input" name="message" required></textarea>
          <button type="submit" className="button">
            Submit
          </button>
          <div className="right-bubble"></div>
          <div className="left-bubble"></div>
        </form>
      </div>
      <div className="home-footer">
        <p className="title">
          <span className="bold">Yanisa</span> <br></br>New
        </p>
        <p className="content">A passionate graphic and web designer</p>
        <div className="button-container">
          <a href="mailto:yanisa.18n@gmail.com" className="button">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/yanisa-bhisitcharoentat" target="_blank" rel="noreferrer" className="button">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="https://www.facebook.com/yanisa.new.10" target="_blank" rel="noreferrer" className="button">
            <FontAwesomeIcon icon={faFacebookF} />
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
