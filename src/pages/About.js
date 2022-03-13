import NavBar from '../components/NavBar';
import './About.scss';

import ps from '../picture/about/ps.png';
import xd from '../picture/about/xd.png';
import figma from '../picture/about/figma.png';
import canva from '../picture/about/canva.png';
import aboutMe from '../picture/about/about-me.png';
import profile from '../picture/about/profile.png';

function About() {
  return (
    <div className="about">
      <NavBar color="#F6A546"></NavBar>
      <div className="container">
        <div className="left">
          <div className="bubble">
            <img src={aboutMe} alt="" className="about-me"></img>
            <img src={profile} alt="" className="profile"></img>
            <div className="sub-bubble"></div>
          </div>
        </div>
        <div className="right">
          <div className="container">
            <div className="overlay"></div>
            <p className="title">
              Yanisa Bhisitcharoentat <span className="no-wrap">( New )</span>
              <br></br>
              <br></br>
            </p>
            <ul>
              <li className="sub-title">E D U C A T I O N</li>
              <p className="content">
                Computer Engineering (3rd year)<br></br>Specialization: AI & Machine Learning
              </p>
              <p className="content">
                Sirindhorn International Institute of Technology<br></br>Thammasat University<br></br>
                <br></br>
              </p>
              <li className="sub-title">
                S K I L L S<br></br>
                <br></br>
              </li>
              <div className="skill">
                <img src={ps} alt="" className="icon"></img>
                <p className="name">Adobe Photoshop</p>
              </div>
              <div className="skill">
                <img src={xd} alt="" className="icon"></img>
                <p className="name">Adobe XD</p>
              </div>
              <div className="skill">
                <img src={figma} alt="" className="icon"></img>
                <p className="name">Figma</p>
              </div>
              <div className="skill">
                <img src={canva} alt="" className="icon"></img>
                <p className="name">Canva</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
