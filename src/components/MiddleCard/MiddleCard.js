import React, { useContext } from 'react';
import classes from './MiddleCard.module.scss';

import CityContext from '../../store/city-context';

const MiddleCard = props => {
  const cityCtx = useContext(CityContext);
  return (
    <div className={classes.middleCard}>
      <div className={classes.middleCard_theWeather}>
        <div className={classes.middleCard_title}>THE WEATHER</div>
        <div className={classes.middleCard_info1}>
          <h2>{`WIND: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.wind_kph : ''
          } km/h`}</h2>
          <h2>{`WIND DIRECTION: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.wind_dir : ''
          }`}</h2>
          <h2>{`PRESSURE: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.pressure_mb : ''
          } hPa`}</h2>
          <h2>{`PRECIPATION: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.precip_mm : ''
          } mm`}</h2>
        </div>
        <div className={classes.middleCard_info2}>
          <h2>{`HUMIDITY: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.humidity : ''
          } %`}</h2>
          <h2>{`FEELS LIKE: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.feelslike_c : ''
          } °C`}</h2>
          <h2>{`VISABILITY: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.vis_km : ''
          } km`}</h2>
          <h2>{`INDEX UV: ${
            cityCtx.fetchedData ? cityCtx.fetchedData.current.uv : ''
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
