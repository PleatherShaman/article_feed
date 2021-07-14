import React from 'react';
import '../styles/advertisement.css';

const Advertisement = ({ image }) => (
  <aside className="banner">
    <img className="banner__img" src={image} alt="advertisement" role="presentation" />
  </aside>
);

export default Advertisement;
