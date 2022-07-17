/* eslint-disable react/jsx-filename-extension */
import './index.scss';
import React from 'react';
import { Link } from 'react-router-dom';
// import Loader from 'react-loaders';
import Loader from 'react-loaders';
import LogoImage from '../../assets/images/logo-image-512.png';

function Home() {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            {'I\'m'}
            <img src={LogoImage} alt="developer" />
            ndrew
          </h1>
          <h2>Student / Developer / Tinkerer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />

    </>
  );
}

export default Home;
