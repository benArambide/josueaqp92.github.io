import React from 'react';

function ContactSection({ socialLinks }) {
  return(
    <section className="ro-background-dark" id="contact">
      <section className="ro-page ro-row ">
        <div className="uk-grid uk-grid-small ro-height-1-1">
          <div className="uk-width-large-1-2 ro-height-1-1 uk-flex uk-flex-middle">
            <div className="ro-social-icons">
              <span className="ro-message-block">Dónde encontrarme</span>
              <h1 className="ro-title ro-title-large ro-title-white">Contactos</h1>
              <p className="ro-color-white">Las personas que se empeñan en perfeccionarse no tienen como perder. Si el mundo mejora, ellas estarán más preparadas para asumir su lugar en él que aquellas que no se preparan.</p>
              <p className="ro-color-white">Contáctame e iniciemos un nuevo proyecto juntos.</p>
              <div>
                <p className="ro-color-white">Puedes escribirme a:</p>
                <a href="mailto: hola@josuearambide.com" className="ro-color-white uk-text-bold">hola@josuearambide.com</a>
              </div>
            </div>
          </div>
          <div className="uk-width-large-1-2 ro-height-1-1 uk-flex uk-flex-middle" style={{justifyContent: 'flex-end'}}>
            <div className="ro-social-icons">
              <div className="ro-mt-2 ro-mb-2">
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
    </section>
    </section>
  );
}

export default ContactSection;