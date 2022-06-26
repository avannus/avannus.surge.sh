/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-useless-fragment */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular, faCss3, faGitAlt, faJsSquare, faNode, faReact,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './index.scss';
// import Loader from 'react-loaders';

function About() {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* todo make this a dynamic sphere? */}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              {/* todo update icons and colors */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#DD0031" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#DD0031" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#DD0031" />
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  );
}

export default About;
