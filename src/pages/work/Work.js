import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NavBar from '../../components/navBar/NavBar';
import './Work.scss';

const work = process.env.REACT_APP_storageURL + 'others/work/work.png'.replaceAll('/', '%2F') + '?alt=media';

function Work() {
  const dataHome = useSelector((store) => store.data.dataHome);
  const dataWork = useSelector((store) => store.data.dataWork);

  const [workUI, setWorkUI] = useState([]);

  useEffect(() => {
    const workUI = dataHome.map((homeObj) => {
      const dataWorkSpecific = dataWork.filter((obj) => obj.section === homeObj.link_to);

      return (
        <div key={homeObj.id} className="section" id={homeObj.link_to}>
          <p className="sub-title">{homeObj.name}</p>
          <div className="picture-container">
            {dataWorkSpecific.map((workObj) => (
              <div key={workObj.id}>
                {workObj.href ? (
                  <a href={workObj.href} target="_blank" rel="noreferrer">
                    <img src={workObj.img_url} alt="" className={`${workObj.is_long_img ? 'long-pic' : 'short-pic'} clickable`}></img>
                  </a>
                ) : (
                  <img src={workObj.img_url} alt="" className={`${workObj.is_long_img ? 'long-pic' : 'short-pic'}`}></img>
                )}
                {workObj.desc && <p className="desc">{workObj.desc}</p>}
              </div>
            ))}
          </div>
          <a href={homeObj.see_more_href} target="_blank" rel="noreferrer" className="button">
            See More
          </a>
        </div>
      );
    });

    setWorkUI(workUI);
  }, [dataHome, dataWork]);

  return (
    <div className="work">
      <NavBar color="#6154F2"></NavBar>
      <div className="container">
        <img src={work} alt="" className="title" id="works"></img>
        {workUI}
      </div>
    </div>
  );
}

export default Work;
