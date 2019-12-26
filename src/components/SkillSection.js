import React from 'react';
import photoshop from '../assets/img/photoshop.jpg';
import illustrator from '../assets/img/illustrator.jpg';
import inkscape from '../assets/img/inkscape.jpg';
import webpack from '../assets/img/webpack.jpg';
import babel from '../assets/img/babel.jpg';
import aws from '../assets/img/aws.jpg';
import jasmine from '../assets/img/jasmine.jpg';
import github from '../assets/img/github.jpg';
import ionic from '../assets/img/ionic.jpg';
import xamarin from '../assets/img/xamarin.jpg';
import linux from '../assets/img/linux.jpg';
import mean from '../assets/img/mean.jpg';


function SkillSection() {
  return (
    <section className="ro-page" id="skills">
      <div className="ro-row ro-height-1-1">
        <div className="uk-grid ro-height-1-1">
          <div className="uk-width-large-1-2 ro-height-1-1 uk-flex uk-flex-middle">
            <div>
              <span className="ro-message-block">Puedo trabajar con</span>
              <h1 className="ro-title ro-title-large">Habilidades</h1>
              <p>Estoy especializado en el desarrollo de aplicaciones para el cliente y tengo conocimientos básicos en
                back-end. Precedido por la semántica del código, rendimiento del sitio web y una buena interfaz
                visual.</p>
              <p>Algunas herramientas que domino:</p>
              <div className="skill-tools">
              <img src={photoshop} alt="Photoshop"/>
              <img src={illustrator} alt="Illustrator"/>
              <img src={inkscape} alt="Inkscape"/>
              <img src={webpack} alt="webpack"/>
              <img src={babel} alt="babel"/>
              <img src={aws} alt="AWS"/>
              <img src={jasmine} alt="Jasmine"/>
              <img src={github} alt="Github" />
              <img src={ionic} alt="Ionic" />
              <img src={xamarin} alt="Xamarin" />
              <img src={linux} alt="Linux" />
              <img src={mean} alt="Mean" />
              </div>
            </div>
          </div>
          <div className="uk-width-large-1-2 ro-height-1-1 ">
            <div className="ro-height-1-1 uk-flex uk-flex-middle">
              <div className="ro-skills uk-width-1-1">
                <div className="ro-skill">
                  PHP
                  <span className="ro-skill-bar ro-skill-value-100"/>
                </div>
                <div className="ro-skill">
                  Jquery / JavaScript
                  <span className="ro-skill-bar ro-skill-value-90"/>
                </div>
                <div className="ro-skill">
                  AngularJs / Angular +2
                  <span className="ro-skill-bar ro-skill-value-90"/>
                </div>
                <div className="ro-skill">
                  Vue js
                  <span className="ro-skill-bar ro-skill-value-90"/>
                </div>
                <div className="ro-skill">
                  React / React Native
                  <span className="ro-skill-bar ro-skill-value-80"/>
                </div>
                <div className="ro-skill">
                  HTML5 / CSS / SASS / LESS
                  <span className="ro-skill-bar ro-skill-value-90"/>
                </div>
                <div className="ro-skill">
                  WORDPRESS
                  <span className="ro-skill-bar ro-skill-value-80"/>
                </div>
                <div className="ro-skill">
                  NODE JS
                  <span className="ro-skill-bar ro-skill-value-80"/>
                </div>
                <div className="ro-skill">
                  MySQL / SQL / POSTGRESS
                  <span className="ro-skill-bar ro-skill-value-90"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SkillSection;