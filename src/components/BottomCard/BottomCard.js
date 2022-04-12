import { useContext } from 'react';

import classes from './BottomCard.module.scss';

import weatherIcon1 from '../../assets/sunny-outline.svg';
import weatherIcon2 from '../../assets/partly-sunny-outline.svg';
import weatherIcon3 from '../../assets/sunny-outline.svg';
import arrowBack from '../../assets/arrow-back-outline.svg';
import arrowForward from '../../assets/arrow-forward-outline.svg';

import CityContext from '../../store/city-context';

const BottomCard = props => {
  const cityCtx = useContext(CityContext);

  // const slides = document.querySelectorAll('#slide');
  // console.log(slides);

  // let curSlide = 0;

  // const slideBack = () => {
  //   curSlide--;
  //   slides.forEach((slide, i) => (slide.style.transform = `translateX(0%)`));
  // };

  // const slideForward = () => {
  //   curSlide++;
  //   slides.forEach((slide, i) => (slide.style.transform = `translateX(-100%)`));
  // };

  return (
    <div className={classes.bottomCard}>
      <div className={classes.bottomCard_container}>
        <div className={classes.bottomCard_day} id="slide">
          <h1>3 DAYS AGO</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon1}
              alt={
                cityCtx.yesterdayData.forecast
                  ? cityCtx.yesterdayData.forecast.forecastday['0'].day
                      .condition.text
                  : ''
              }
            />
            <span>
              {cityCtx.yesterdayData.forecast
                ? `${cityCtx.yesterdayData.forecast.forecastday['0'].day.avgtemp_c}°C`
                : ''}
            </span>
          </div>
        </div>

        <div className={classes.bottomCard_day} id="slide">
          <h1>2 DAYS AGO</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon1}
              alt={
                cityCtx.yesterdayData.forecast
                  ? cityCtx.yesterdayData.forecast.forecastday['0'].day
                      .condition.text
                  : ''
              }
            />
            <span>
              {cityCtx.yesterdayData.forecast
                ? `${cityCtx.yesterdayData.forecast.forecastday['0'].day.avgtemp_c}°C`
                : ''}
            </span>
          </div>
        </div>

        <div className={classes.bottomCard_day} id="slide">
          <h1>YESTERDAY</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon1}
              alt={
                cityCtx.yesterdayData.forecast
                  ? cityCtx.yesterdayData.forecast.forecastday['0'].day
                      .condition.text
                  : ''
              }
            />
            <span>
              {cityCtx.yesterdayData.forecast
                ? `${cityCtx.yesterdayData.forecast.forecastday['0'].day.avgtemp_c}°C`
                : ''}
            </span>
          </div>
        </div>

        <div className={classes.bottomCard_day} id="slide">
          <h1>TODAY</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon1}
              alt={
                cityCtx.forecastData.forecast
                  ? cityCtx.forecastData.forecast.forecastday['0'].day.condition
                      .text
                  : ''
              }
            />
            <span>
              {cityCtx.forecastData.forecast
                ? `${cityCtx.forecastData.forecast.forecastday['0'].day.avgtemp_c}°C`
                : ''}
            </span>
          </div>
        </div>

        <div className={classes.bottomCard_day} id="slide">
          <h1>TOMORROW</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon2}
              alt={
                cityCtx.forecastData.forecast
                  ? cityCtx.forecastData.forecast.forecastday['1'].day.condition
                      .text
                  : ''
              }
            />
            <span>
              {cityCtx.forecastData.forecast
                ? `${cityCtx.forecastData.forecast.forecastday['1'].day.avgtemp_c} °C`
                : ''}
            </span>
          </div>
        </div>

        <div className={classes.bottomCard_day} id="slide">
          <h1>IN 2 DAYS</h1>
          <div className={classes.bottomCard_temperature}>
            <img
              src={weatherIcon3}
              alt={
                cityCtx.forecastData.forecast
                  ? cityCtx.forecastData.forecast.forecastday['2'].day.condition
                      .text
                  : ''
              }
            />
            <span>
              {cityCtx.forecastData.forecast
                ? `${cityCtx.forecastData.forecast.forecastday['2'].day.avgtemp_c} °C`
                : ''}
            </span>
          </div>
        </div>
      </div>

      <img
        className={classes.bottomCard_arrowBack}
        src={arrowBack}
        alt="Back"
      />

      <img
        className={classes.bottomCard_arrowForward}
        src={arrowForward}
        alt="Forward"
      />
    </div>
  );
};

export default BottomCard;
