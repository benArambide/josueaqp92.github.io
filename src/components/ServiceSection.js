import React from 'react';

function ServiceSection() {
  return (
    <section className="ro-page ro-background-light " id="services">
      <div className="ro-row ro-height-1-1">
        <div className="uk-grid ro-height-1-1">
          <div className="uk-width-large-1-1 ro-height-1-1 uk-flex uk-flex-middle">
            <div>
              <span className="ro-message-block">Que puedo hacer</span>
              <h1 className="ro-title ro-title-large">Servicios</h1>
              <div className="uk-grid uk-grid-small uk-grid-width-large-1-5 ro-mt-2">
                <div className="ro-mb-2">
                  <i className="uk-icon uk-icon-cog ro-icon ro-icon-medium" />
                  <h2 className="ro-mt-0">Desarrollo de Páginas web</h2>
                  <p>Tener un sitio es tener su empresa abierta y lista para ser descubierta, las 24 horas del día, los
                    7 días de la semana. Trabajo en el desarrollo de sitios web creativos, enfocándose siempre en la
                    usabilidad y responsive design y que se adecuan a cualquier contenido.</p>
                </div>
                <div className="ro-mb-2">
                  <i className="uk-icon uk-icon-shopping-bag ro-icon ro-icon-medium" />
                  <h2 className="ro-mt-0">Tiendas Virtuales</h2>
                  <p>¿Ha pensado en expandir sus ventas y vender también por Internet? Desarrollo de toda su tienda
                    virtual, registro de productos, integración con los correos y principales medios de pago</p>
                </div>
                <div className="ro-mb-2">
                  <i className="uk-icon uk-icon-mobile ro-icon ro-icon-medium" />
                  <h2 className="ro-mt-0">Optimización de Sitios</h2>
                  <p>¿Sabías que actualmente en Perú, más del 60% del tráfico de internet se hace a través de teléfonos
                    móviles? ¿El sitio de su empresa está preparado para este tipo de acceso? Actualizo y modernizo
                    sitios, usando el reponsive design, para que el mismo sea apto y visible en cualquier
                    dispositivo.</p>
                </div>
                <div className="ro-mb-2">
                  <i className="uk-icon uk-icon-sliders ro-icon ro-icon-medium" />
                  <h2 className="ro-mt-0">Mantenimiento de Sitios</h2>
                  <p>Cambio de información como dirección, teléfono, etc. Inserción de nuevos contenidos como productos
                    y servicios. Intercambio de imágenes. El mantenimiento puede realizarse esporádicamente o bien a
                    través de un plan mensual o cómo proyecto.</p>
                </div>
                <div className="ro-mb-2">
                  <i className="uk-icon uk-icon-database ro-icon ro-icon-medium"></i>
                  <h2 className="ro-mt-0">Hospedaje y Dominio</h2>
                  <p>El alojamiento del sitio es el servicio de almacenamiento de un sitio web y la disponibilidad
                    constante del mismo en Internet. El dominio es el nombre de su empresa en Internet, por ejemplo:
                    www.miempresa.com. El servicio brindado es con mantenimiento contacte y configuración.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;