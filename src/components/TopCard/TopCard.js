import React, { useContext } from 'react';

import classes from './TopCard.module.scss';

import weatherIcon from '../../assets/partly-sunny-outline.svg';

import CityContext from '../../store/city-context';

const TopCard = props => {
  const cityCtx = useContext(CityContext);

  ///////////////////////////////////////////////////////////////////////////////////

  const chooseFontSize = () => {
    if (
      cityCtx.forecastData.location.name.toUpperCase().length > 15 &&
      cityCtx.forecastData.location.name.toUpperCase().length < 35
    ) {
      return classes.topCard_title_small;
    }
    if (cityCtx.forecastData.location.name.toUpperCase().length > 35) {
      return classes.topCard_title_extrasmall;
    }
    return classes.topCard_title_big;
  };

  return (
    <div className={classes.topCard}>
      <div className={classes.topCard_title}>
        <h1 className={chooseFontSize()}>
          {cityCtx.forecastData.location
            ? cityCtx.forecastData.location.name.toUpperCase()
            : ''}
        </h1>
        <h2>{`COUNTRY: ${
          cityCtx.forecastData.location
            ? cityCtx.forecastData.location.country.toUpperCase()
            : ''
        }`}</h2>
      </div>
      <div className={classes.topCard_mainInfo}>
        <h2>{`LOCAL TIME: ${
          cityCtx.forecastData.location
            ? cityCtx.forecastData.location.localtime
            : ''
        }`}</h2>
        <h2>{`SUNRISE: ${
          cityCtx.astronomyData.astronomy
            ? cityCtx.astronomyData.astronomy.astro.sunrise
            : ''
        }`}</h2>
        <h2>{`SUNSET: ${
          cityCtx.astronomyData.astronomy
            ? cityCtx.astronomyData.astronomy.astro.sunset
            : ''
        }`}</h2>
        <h2>{`CONDITION: ${
          cityCtx.forecastData.current
            ? cityCtx.forecastData.current.condition.text.toUpperCase()
            : ''
        }`}</h2>
      </div>
      <div className={classes.topCard_temperature}>
        <img
          src={weatherIcon}
          alt={
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.condition.text.toUpperCase()
              : ''
          }
        ></img>
        <h1>{`${
          cityCtx.forecastData.current
            ? cityCtx.forecastData.current.temp_c
            : ''
        }°C`}</h1>
      </div>
    </div>
  );
};

export default TopCard;
