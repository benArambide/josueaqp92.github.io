import React from 'react';
import background from '../assets/img/background-img-1.jpg';

function ProfileSection({ socialLinks }) {
  return (
    <section className="ro-page" id="profile">
      <span id="flag" />
      <div className="uk-grid ro-height-1-1">
        <div className="uk-width-large-1-2 ro-height-1-1 ">
          <div className="ro-height-1-1 ro-row-left uk-flex uk-flex-middle">
            <div>
              <span className="ro-message-block">Josué ¿Quien?</span>
              <h1 className="ro-title ro-title-large ro-mb-2">Un Poco Sobre Mi</h1>
              <p>
                Hola! Mucho gusto, mi nombre es Josué Benjamín Arambide Quispe, tengo 25 años y soy Web Designer &
                Frontend Developer, tengo tambien conocimiento de Backend. :D
              </p>
              <p>Estudie Ciencia de la Computación y durante este periodo me adentre en lo que es la programación web e
                inmediatamente quede fascinado, amo desarrollar web y siempre me pongo a actualizar mis conocimientos ya
                que el mundo web se va actualizando con mucha frecuencia.</p>
              <div className="ro-mt-2">
                <div>
                  <a href="#education" data-uk-modal="{center:true}" className="ro-button ro-button-blue ro-mb-1 ro-mr-1">
                    Educación
                  </a>
                  <a href="Josue_Benjamín_Arambide_Quispe_-_Senior_Front_end_Developer.pdf" target="_blank"
                     className="ro-button ro-button-blue ro-mb-1">
                    Mi Curriculum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-width-large-1-2 ro-height-1-1 ">
          <div style={{background: `url(${background})`}}
               className="ro-background-cover uk-width-1-1 ro-height-1-1">
            <div className="ro-height-1-1 ro-row-right uk-flex uk-flex-middle uk-flex-right">

              <div className="ro-profile-img-wrap">
                <img src="https://media.licdn.com/dms/image/C4E03AQHJPKi-KaFgnQ/profile-displayphoto-shrink_800_800/0?e=1582761600&v=beta&t=KpW9J0XILKf3Wf9cNyXcjSA18TB_Q4FAffVCBdy-cX8" className="ro-profile-img" />
                {
                  socialLinks.map( link => (
                    <a href={link.href} target="_blank" className="uk-button">
                      <i className={`uk-icon ${link.icon}`} />
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;