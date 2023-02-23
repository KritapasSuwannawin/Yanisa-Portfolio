import pathToUrl from '../../utils/pathToUrl';

import NavBar from '../../components/navBar/NavBar';
import './About.scss';

const figma = pathToUrl('others/about/figma.png');
const xd = pathToUrl('others/about/xd.png');
const ps = pathToUrl('others/about/ps.png');
const ai = pathToUrl('others/about/ai.png');
const pc = pathToUrl('others/about/pc.png');
const canva = pathToUrl('others/about/canva.png');
const aboutMe = pathToUrl('others/about/about-me.png');
const profile = pathToUrl('others/about/profile.png');

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
            </p>
            <ul>
              <li className="sub-title">E D U C A T I O N</li>
              <p className="content">
                Computer Engineering (4th year)<br></br>Specialization: AI & Machine Learning
              </p>
              <p className="content margin-bottom">
                Sirindhorn International Institute of Technology,<br></br>Thammasat University
              </p>
              <li className="sub-title">S K I L L S</li>
              <div className="skill">
                <img src={figma} alt="" className="icon"></img>
                <p className="name">Figma</p>
              </div>
              <div className="skill">
                <img src={xd} alt="" className="icon"></img>
                <p className="name">Adobe XD</p>
              </div>
              <div className="skill">
                <img src={ps} alt="" className="icon"></img>
                <p className="name">Adobe Photoshop</p>
              </div>
              <div className="skill">
                <img src={ai} alt="" className="icon"></img>
                <p className="name">Adobe Illustrator</p>
              </div>
              <div className="skill">
                <img src={pc} alt="" className="icon"></img>
                <p className="name">Procreate</p>
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
