import React from 'react';
import Advertisement from './advertisement';
import Teasers from './teasers';
import { ADVERTISING_LINK, TEASER_URL } from '../constants/constants';
import '../styles/content.css';

const Content = () => (
  <main className="main">
    <div className="main__div main__div--center">
      <Teasers teaserUrl={TEASER_URL} />
    </div>

    <div className="main__div main__div--right">
      <Advertisement image={ADVERTISING_LINK} />
    </div>
  </main>
);

export default Content;
