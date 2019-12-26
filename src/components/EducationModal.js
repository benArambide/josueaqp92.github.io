import React from 'react';

function EducationModal() {
  return (
    <div id="education" className="uk-modal ro-modal">
      <div className="uk-modal-dialog uk-modal-dialog-large ro-modal-dialog">
        <a className="uk-modal-close uk-close"></a>
        <span className="ro-message-block">Lo que aprendí</span>
        <h1 className="ro-title ro-title-large">Mi Educación</h1>

        <h3 className="ro-m-0">Estudie Ciencia de la Computación en la Universidad Nacional de San Agustín:</h3>
        <p className="ro-mt-0">Esto me sirvió para introducsirme al mundo de la programación, pude ver de mejor maneras
          las cosas y saber que nuestros problemas cotidianos podrian ser solucionados y optimizados con software.</p>

        <h3 className="ro-m-0">Platzi.com:</h3>
        <p className="ro-mt-0">Tiempo durante la Universidad conocí lo que era la programación web, desde aquel momento
          me he capacitado de manera autodidacta usando esta herramienta. (<a href="https://platzi.com/@arambide/"
                                                                              target="_blank">platzi.com/@arambide</a>)
        </p>
        <p>En platzi pude llevar cursos complementarios a mi carrera y más especificos a lo que realmente me gusta.</p>
        <div className="uk-grid uk-grid-width-1-5">
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img src="https://static.platzi.com/media/achievements/Golden-badge-arquitecto-front.png" width="100"/>
                <h4 className="ro-m-0">Arquitectura Frontend</h4>
            </div>
          </div>
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img src="https://static.platzi.com/media/achievements/goldenbdage-desarrollador-javascript.png"
                   width="100"/>
            </div>
            <h4 className="ro-m-0">Desarrollo con JavaScript</h4>
          </div>
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img
                src="https://static.platzi.com/media/achievements/badge-dorado-carrera-desarrollador-react-622a4de6-3fad-4d10-91ba-d68d060cab4c.png"
                width="100"/>
            </div>
            <h4 className="ro-m-0">Desarrollo con React</h4>
          </div>
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img src="https://static.platzi.com/media/achievements/LAMP.png" width="100"/>
            </div>
            <h4 className="ro-m-0">Desarrollo Backend con PHP</h4>
          </div>
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img
                src="https://static.platzi.com/media/achievements/golden_badges-angular-a5634cea-cc0f-41a3-92a7-ff18d0745465.png"
                width="100"/>
            </div>
            <h4 className="ro-m-0">Desarrollo con Angular</h4>
          </div>
          <div className="uk-text-center ">
            <div className="ro-p-1">
              <img
                src="https://static.platzi.com/media/achievements/goldenbadges-vue-js-6392fdad-e528-4f4a-b606-2dc0e169482c.png"
                width="100" />
            </div>
            <h4 className="ro-m-0">Desarrollo con Vue Js</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationModal;