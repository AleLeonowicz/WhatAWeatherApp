import React, { useContext } from 'react';

import classes from './MiddleCard.module.scss';
import {
  over30Msg,
  over20Msg,
  over10Msg,
  over0Msg,
  below0Msg,
} from '../../constants/index';
import CityContext from '../../store/city-context';

const MiddleCard = () => {
  const cityCtx = useContext(CityContext);
  return (
    <div className={classes.middleCard}>
      <div className={classes.middleCard_theWeather}>
        <div className={classes.middleCard_title}>THE WEATHER</div>
        <div className={classes.middleCard_info1}>
          <h2>{`WIND: ${cityCtx.forecastData.current.wind_kph} km/h`}</h2>
          <h2>{`WIND DIRECTION: ${cityCtx.forecastData.current.wind_dir}`}</h2>
          <h2>{`PRESSURE: ${cityCtx.forecastData.current.pressure_mb} hPa`}</h2>
          <h2>{`PRECIPATION: ${cityCtx.forecastData.current.precip_mm} mm`}</h2>
        </div>
        <div className={classes.middleCard_info2}>
          <h2>{`HUMIDITY: ${cityCtx.forecastData.current.humidity} %`}</h2>
          <h2>{`FEELS LIKE: ${cityCtx.forecastData.current.feelslike_c} °C`}</h2>
          <h2>{`VISABILITY: ${cityCtx.forecastData.current.vis_km} km`}</h2>
          <h2>{`INDEX UV: ${cityCtx.forecastData.current.uv}`}</h2>
        </div>
      </div>
      <div className={classes.middleCard_whatToWear}>
        <h1>WHAT TO WEAR</h1>
        <h2>
          {+cityCtx.forecastData.current.temp_c > 30
            ? over30Msg
            : +cityCtx.forecastData.current.temp_c > 20
            ? over20Msg
            : +cityCtx.forecastData.current.temp_c > 10
            ? over10Msg
            : cityCtx.forecastData.current.temp_c > 0
            ? over0Msg
            : below0Msg}
        </h2>
      </div>
    </div>
  );
};

export default MiddleCard;
