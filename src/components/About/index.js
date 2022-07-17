/* eslint-disable react/jsx-filename-extension */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGitAlt, faJava, faLinux, faNode, faPython, faReact,
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './index.scss';
import Loader from 'react-loaders';

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
              <FontAwesomeIcon icon={faJava} color="#f89820" />
              {/* java colors #f89820 #5382a1 */}
              {/* todo update icons and colors */}
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faGitAlt} color="#F1502F" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#4b8bbe" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#61dbfb" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#68a063" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faLinux} color="black" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About;
