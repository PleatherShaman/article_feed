import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/teasers.css';
import Loader from './loader';
import Teaser from './teaser';
import teasersData from '../data/teasers-data';

const Teasers = () => {
  const [loading, setLoading] = React.useState(true);
  const [teasers, setTeasers] = React.useState([]);
  const [error, setError] = React.useState(false);

  React.useEffect(async () => {
    try {
      setTimeout(() => {
        setLoading(false);
        setError(false);
        setTeasers(teasersData.data);
      }, 2000);

      // use this when making axios call
      // let res = await axios.get(props.url);
      // setLoading(false);
      // setTeasers(res.data.data);
    } catch (e) {
      setLoading(false);
      setError(e.response.data);
    }
  }, []);

  return (
    <section className="teasers">
      {loading && !error && <Loader />}

      {!loading && error && <h2>{error}</h2>}

      {!loading
      && !error
      && teasers.length > 0
      && teasers.map((teaser, index) => (
        <div className={`teaserContainer ${index === 0 ? 'first' : ''}`} key={`teaser-${uuidv4()}`}>
          <Teaser teaser={teaser} />
        </div>
      ))}
    </section>
  );
};

export default Teasers;
