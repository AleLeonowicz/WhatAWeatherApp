import React, { useContext } from 'react';
import classes from './MiddleCard.module.scss';

import CityContext from '../../store/city-context';

const MiddleCard = () => {
  const cityCtx = useContext(CityContext);
  return (
    <div className={classes.middleCard}>
      <div className={classes.middleCard_theWeather}>
        <div className={classes.middleCard_title}>THE WEATHER</div>
        <div className={classes.middleCard_info1}>
          <h2>{`WIND: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.wind_kph
              : ''
          } km/h`}</h2>
          <h2>{`WIND DIRECTION: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.wind_dir
              : ''
          }`}</h2>
          <h2>{`PRESSURE: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.pressure_mb
              : ''
          } hPa`}</h2>
          <h2>{`PRECIPATION: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.precip_mm
              : ''
          } mm`}</h2>
        </div>
        <div className={classes.middleCard_info2}>
          <h2>{`HUMIDITY: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.humidity
              : ''
          } %`}</h2>
          <h2>{`FEELS LIKE: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.feelslike_c
              : ''
          } °C`}</h2>
          <h2>{`VISABILITY: ${
            cityCtx.forecastData.current
              ? cityCtx.forecastData.current.vis_km
              : ''
          } km`}</h2>
          <h2>{`INDEX UV: ${
            cityCtx.forecastData.current ? cityCtx.forecastData.current.uv : ''
          }`}</h2>
        </div>
      </div>
      <div className={classes.middleCard_whatToWear}>
        <h1>WHAT TO WEAR</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h2>
      </div>
    </div>
  );
};

export default MiddleCard;
