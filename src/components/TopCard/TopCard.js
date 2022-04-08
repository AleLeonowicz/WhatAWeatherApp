import React, { useContext } from 'react';

import classes from './TopCard.module.scss';

// import weatherIcon from '../../assets/partly-sunny-outline.svg';

import CityContext from '../../store/city-context';

const TopCard = props => {
  const cityCtx = useContext(CityContext);

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={classes.topCard}>
      <div className={classes.topCard_title}>
        <h1>
          {cityCtx.fetchedData.location
            ? cityCtx.fetchedData.location.name.toUpperCase()
            : ''}
        </h1>
        <h2>{`COUNTRY: ${
          cityCtx.fetchedData.location
            ? cityCtx.fetchedData.location.country.toUpperCase()
            : ''
        }`}</h2>
      </div>
      <div className={classes.topCard_mainInfo}>
        <h2>{`LOCAL TIME: ${
          cityCtx.fetchedData.location
            ? cityCtx.fetchedData.location.localtime
            : ''
        }`}</h2>
        <h2>{`SUNRISE: ${
          cityCtx.fetchedData.astronomy
            ? cityCtx.fetchedData.astronomy.sunrise
            : ''
        }`}</h2>
        <h2>{`SUNSET: ${
          cityCtx.fetchedData.astronomy
            ? cityCtx.fetchedData.astronomy.sunset
            : ''
        }`}</h2>
        <h2>{`CONDITION: ${
          cityCtx.fetchedData.condition
            ? cityCtx.fetchedData.current.condition.text.toUpperCase()
            : ''
        }`}</h2>
      </div>
      <div className={classes.topCard_temperature}>
        <img
          src=""
          alt={
            cityCtx.fetchedData.condition
              ? cityCtx.fetchedData.current.condition.text.toUpperCase()
              : ''
          }
        ></img>
        <h1>{`${
          cityCtx.fetchedData.current ? cityCtx.fetchedData.current.temp_c : ''
        }°C`}</h1>
      </div>
    </div>
  );
};

export default TopCard;
