/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import LogoA from '../../assets/images/logo-image.png'; // fixme replace

function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi,
          {' '}
          <br />
          {'I\'m'}
          <img src={LogoA} alt="developer" />
          ndrew
          <br />
          developer
        </h1>
        <h2>Student / Developer / Tinkerer</h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home;
