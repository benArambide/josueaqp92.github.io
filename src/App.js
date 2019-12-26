import React from 'react';
import Navigation from './components/layout/Navigation';
import MainSlide from './components/MainSlide';
import ProfileSection from './components/ProfileSection';
import ServiceSection from './components/ServiceSection';
import SkillSection from './components/SkillSection';
import ContactSection from './components/ContactSection';
import FooterInformation from './components/FooterInformation';
import EducationModal from './components/EducationModal';
import './assets/scss/index.scss';
import './assets/js/index';

const navigationItems = [
  {
    name: 'PERFIL',
    to: '#profile'
  },
  {
    name: 'SERVICIOS',
    to: '#services'
  },
  {
    name: 'HABILIDADES',
    to: '#skills'
  },
  {
    name: 'CONTACTO',
    to: '#contact'
  },
];

const socialLinks = [
  {
    href: 'https://www.facebook.com/benjamin.arambide',
    icon: 'uk-icon-facebook'
  },
  {
    href: 'https://github.com/josueaqp92',
    icon: 'uk-icon-github'
  },
  {
    href: 'https://www.linkedin.com/in/josu%C3%A9-benjamin-arambide-quispe-a3b45a117/',
    icon: 'uk-icon-linkedin'
  }
];

function App() {
  return (
    <div className="App">
      <Navigation items={navigationItems}/>
      <MainSlide items={navigationItems}/>
      <ProfileSection socialLinks={socialLinks} />
      <ServiceSection/>
      <SkillSection/>
      <ContactSection socialLinks={socialLinks} />
      <EducationModal/>
      <FooterInformation/>
    </div>
  );
}

export default App;
