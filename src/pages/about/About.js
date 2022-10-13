import NavBar from '../../components/navBar/NavBar';
import './About.scss';

const ps = process.env.REACT_APP_storageURL + 'others/about/ps.png'.replaceAll('/', '%2F') + '?alt=media';
const xd = process.env.REACT_APP_storageURL + 'others/about/xd.png'.replaceAll('/', '%2F') + '?alt=media';
const figma = process.env.REACT_APP_storageURL + 'others/about/figma.png'.replaceAll('/', '%2F') + '?alt=media';
const canva = process.env.REACT_APP_storageURL + 'others/about/canva.png'.replaceAll('/', '%2F') + '?alt=media';
const aboutMe = process.env.REACT_APP_storageURL + 'others/about/about-me.png'.replaceAll('/', '%2F') + '?alt=media';
const profile = process.env.REACT_APP_storageURL + 'others/about/profile.png'.replaceAll('/', '%2F') + '?alt=media';

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
