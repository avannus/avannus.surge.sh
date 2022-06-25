/* eslint-disable react/jsx-filename-extension */
import './index.scss';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import LogoS from '../../assets/images/logo-image.png';
import LogoSubtitle from '../../assets/images/logo-text.png';

const iconColor = '#4d4d4e';

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color={iconColor} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color={iconColor} />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/content"
        >
          <FontAwesomeIcon icon={faEnvelope} color={iconColor} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/avannus/"
          >
            <FontAwesomeIcon icon={faLinkedin} color={iconColor} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/avannus/"
          >
            <FontAwesomeIcon icon={faGithub} color={iconColor} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
