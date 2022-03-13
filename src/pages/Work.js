import NavBar from '../components/NavBar';
import './Work.scss';

import work from '../picture/work/work.png';

import ui1 from '../picture/work/UI/ui1.png';
import ui2 from '../picture/work/UI/ui2.png';
import p1 from '../picture/work/Poster/p1.png';
import p2 from '../picture/work/Poster/p2.png';
import p3 from '../picture/work/Poster/p3.png';
import v1 from '../picture/work/Short Video/v1.png';
import v2 from '../picture/work/Short Video/v2.png';
import g1 from '../picture/work/GIF/g1.gif';
import g2 from '../picture/work/GIF/g2.gif';
import g3 from '../picture/work/GIF/g3.gif';
import gr1 from '../picture/work/Graphic contents/gr1.jpg';
import gr2 from '../picture/work/Graphic contents/gr2.png';
import gr3 from '../picture/work/Graphic contents/gr3.png';
import o1 from '../picture/work/Others/o1.png';
import o2 from '../picture/work/Others/o2.png';
import o3 from '../picture/work/Others/o3.png';

function Work() {
  return (
    <div className="work">
      <NavBar color="#6154F2"></NavBar>
      <div className="container">
        <img src={work} alt="" className="title" id="works"></img>
        <div className="section" id="ux-ui-design">
          <p className="sub-title">UX UI Designs</p>
          <div className="picture-container">
            <div>
              <a href="https://www.figma.com/file/Wh24nUzbjHJAz56U4bX2AU/Yanisa's-Portfolio?node-id=0%3A1" target="_blank" rel="noreferrer">
                <img src={ui1} alt="" className="long-pic clickable"></img>
              </a>
              <p className="desc">Figma</p>
            </div>
            <div>
              <a href="https://xd.adobe.com/view/976e1396-a34c-43e6-b5fd-af08aa81a608-c23d/" target="_blank" rel="noreferrer">
                <img src={ui2} alt="" className="long-pic clickable"></img>
              </a>
              <p className="desc">Adobe XD</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1DHzRECzvAus7T0evka-v0vQgkWmzIYsu?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
        <div className="section" id="poster">
          <p className="sub-title">Poster</p>
          <div className="picture-container">
            <img src={p1} alt="" className="short-pic"></img>
            <img src={p2} alt="" className="short-pic"></img>
            <img src={p3} alt="" className="short-pic"></img>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1gstK2jdcajG2Ijb1fuIjlQVe9sC9x91C?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
        <div className="section" id="short-video">
          <p className="sub-title">Short Video</p>
          <div className="picture-container">
            <a href="https://drive.google.com/file/d/1HfYOxTglZVdKRX69NFMOUBqHmoowWtcT/view?usp=sharing" target="_blank" rel="noreferrer">
              <img src={v1} alt="" className="long-pic clickable"></img>
            </a>
            <a href="https://drive.google.com/file/d/1cTO2n_WVd0y_anhNVkkABb6GwwHLel0w/view?usp=sharing" target="_blank" rel="noreferrer">
              <img src={v2} alt="" className="long-pic clickable"></img>
            </a>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1heI6fgS977MRMW1KZ_9aijtothnrh8G9?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
        <div className="section" id="gif">
          <p className="sub-title">GIF</p>
          <div className="picture-container">
            <img src={g1} alt="" className="short-pic"></img>
            <img src={g2} alt="" className="short-pic"></img>
            <img src={g3} alt="" className="short-pic"></img>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1h0HFFXJ8l_NYjK5msf-EhhXTIBkhxbaL?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
        <div className="section" id="graphic-contents">
          <p className="sub-title">Graphic Contents</p>
          <div className="picture-container">
            <img src={gr1} alt="" className="short-pic"></img>
            <img src={gr2} alt="" className="short-pic"></img>
            <img src={gr3} alt="" className="short-pic"></img>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1jEWDQeO8v6s3KERd1kCnjAHLHMTk_37u?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
        <div className="section" id="others">
          <p className="sub-title">Others</p>
          <div className="picture-container">
            <img src={o1} alt="" className="short-pic"></img>
            <img src={o2} alt="" className="short-pic"></img>
            <img src={o3} alt="" className="short-pic"></img>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1gFqDqySL6EubzV78XEcjHOC3y4KPcAgR?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            See More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
