import React, { useContext } from 'react';

import classes from './BottomCard.module.scss';

import weatherIcon1 from '../../assets/sunny-outline.svg';
import weatherIcon2 from '../../assets/partly-sunny-outline.svg';
import weatherIcon3 from '../../assets/sunny-outline.svg';
import arrowBack from '../../assets/arrow-back-outline.svg';
import arrowForward from '../../assets/arrow-forward-outline.svg';

import CityContext from '../../store/city-context';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BottomCard = props => {
  const cityCtx = useContext(CityContext);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide, slidesToShow },
    } = rest;
    return (
      <div className={classes.carouselContainer_buttonGroup}>
        <button
          className={
            currentSlide === 0
              ? classes.carouselContainer_buttonLeft_disabled
              : classes.carouselContainer_buttonLeft
          }
          onClick={() => previous()}
        >
          <img src={arrowBack} alt="Go to previous slide" />
        </button>
        <button
          className={
            currentSlide === slidesToShow
              ? classes.carouselContainer_buttonRight_disabled
              : classes.carouselContainer_buttonRight
          }
          onClick={() => next()}
        >
          <img src={arrowForward} alt="Go to next slide" />
        </button>
      </div>
    );
  };

  return (
    <div className={classes.bottomCard}>
      <div className={classes.bottomCard_container}>
        <Carousel
          responsive={responsive}
          containerClass={classes.carouselContainer}
          autoPlay={false}
          autoPlaySpeed={10000000}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
        >
          <div className={classes.bottomCard_day}>
            <h1>3 DAYS AGO</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={weatherIcon1}
                alt={
                  cityCtx.twoDaysAgoData.forecast
                    ? cityCtx.twoDaysAgoData.forecast.forecastday['0'].day
                        .condition.text
                    : ''
                }
              />
              <span>
                {cityCtx.twoDaysAgoData.forecast
                  ? `${cityCtx.twoDaysAgoData.forecast.forecastday['0'].day.maxtemp_c}°C`
                  : ''}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>2 DAYS AGO</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={weatherIcon1}
                alt={
                  cityCtx.threeDaysAgoData.forecast
                    ? cityCtx.threeDaysAgoData.forecast.forecastday['0'].day
                        .condition.text
                    : ''
                }
              />
              <span>
                {cityCtx.threeDaysAgoData.forecast
                  ? `${cityCtx.threeDaysAgoData.forecast.forecastday['0'].day.maxtemp_c}°C`
                  : ''}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
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
                  ? `${cityCtx.yesterdayData.forecast.forecastday['0'].day.maxtemp_c}°C`
                  : ''}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>TODAY</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={weatherIcon1}
                alt={
                  cityCtx.forecastData.forecast
                    ? cityCtx.forecastData.forecast.forecastday['0'].day
                        .condition.text
                    : ''
                }
              />
              <span>
                {cityCtx.forecastData.forecast
                  ? `${cityCtx.forecastData.forecast.forecastday['0'].day.maxtemp_c}°C`
                  : ''}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>TOMORROW</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={weatherIcon2}
                alt={
                  cityCtx.forecastData.forecast
                    ? cityCtx.forecastData.forecast.forecastday['1'].day
                        .condition.text
                    : ''
                }
              />
              <span>
                {cityCtx.forecastData.forecast
                  ? `${cityCtx.forecastData.forecast.forecastday['1'].day.maxtemp_c} °C`
                  : ''}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>IN 2 DAYS</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={weatherIcon3}
                alt={
                  cityCtx.forecastData.forecast
                    ? cityCtx.forecastData.forecast.forecastday['2'].day
                        .condition.text
                    : ''
                }
              />
              <span>
                {cityCtx.forecastData.forecast
                  ? `${cityCtx.forecastData.forecast.forecastday['2'].day.maxtemp_c} °C`
                  : ''}
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BottomCard;
