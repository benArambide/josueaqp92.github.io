import React from 'react';
import logo2 from '../assets/img/ja-logo-2.svg';
import video from '../assets/video/background.mp4';

function MainSlide({ items }) {
  return (
    <section className="ro-slide">
      <video className="ro-video" autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <div>
          <img src={logo2} alt="Josué Arambide" />
            <h4 className="uk-text-center ro-mt-3 ro-mb-3 ro-title ro-title-medium ro-title-white">
              &nbsp;<span className="typing" />
            </h4>
            <div className="nav-wrap">
              <ul className="nav">
                {
                  items.map( item => (
                    <li key={item.name}>
                      <a href={item.to}>{ item.name }</a>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>
      </div>
      <div className="scroll">
        <div className="uk-text-center" style={{position: 'relative'}}>
          <span>SCROLL</span>
          <a className="arrow-animated">
            <i className="uk-icon-angle-down" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainSlide;