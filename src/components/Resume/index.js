/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import './index.scss';
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Loader from 'react-loaders';
// import resume from './Andrew_VanNus_Resume.pdf';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () => setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <>
      <div className="container pdf">
        <nav>
          <button onClick={goToPrevPage}>Prev</button>
          <button onClick={goToNextPage}>Next</button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </nav>

        <Document
          file="Andrew_VanNus_Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Resume;
