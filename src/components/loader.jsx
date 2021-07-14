import React from 'react';
import '../styles/loader.css';

// adopted from https://loading.io/css/

const Loader = () => (
  <div className="loader">
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loader;
