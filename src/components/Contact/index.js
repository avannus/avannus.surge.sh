/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React, { useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import './index.scss';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6lxiik8',
        'template_2ct0j1i',
        form.current,
        'npJqoU4jW-QIPKuJt',
        // todo update and hide
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (err) => {
          alert(
            `Failed to send the message, please try again\n${JSON.stringify(
              err,
            )}`,
          );
        },
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          <p>Lorum ipsum</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input placeholder="Subject" name="subject" type="text" />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input type="submit" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Contact;
