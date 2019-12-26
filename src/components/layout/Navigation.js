import React from 'react';
import logo from '../../assets/img/ja-logo-1.svg';

function Navigation({ items }) {
  return (
    <section className="ro-header-nav ro-header-nav-fixed hide animated" id="ro-header">
      <div className="ro-row uk-flex uk-flex-space-between">
        <img src={logo} alt="Josué Arambide" className="logo" />
          <a id="toggle">
            <i className="uk-icon uk-icon-bars" />
          </a>
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
      <div className="nav-mobile-wrap">
        <ul className="nav-mobile uk-text-center">
          {
            items.map( item => (
              <li key={item.name} className='ro-mr-1 ro-ml-1'>
                <a href={item.to}>{ item.name }</a>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Navigation;