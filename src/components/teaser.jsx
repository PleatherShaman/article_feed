import React from 'react';
import '../styles/teaser.css';

const Teaser = (props) => {
  const { teaser } = props;

  return (
    <article className="teaser">
      <a className="teaser__anchor" href={teaser.url}>
        <div className="teaser__content">
          <img
            className="teaser__img"
            src={teaser.contentImageUrl}
            alt={`${teaser.contentTitle}`}
          />
          <div className="teaser__text">
            <h3 className="teaser__title">{teaser.contentTitle}</h3>
            <p className="teaser__summary">{teaser.contentSummary}</p>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Teaser;
