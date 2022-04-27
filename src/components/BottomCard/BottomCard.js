import React, { useContext } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import classes from './BottomCard.module.scss';
import arrowBack from '../../assets/arrow-back-outline.svg';
import arrowForward from '../../assets/arrow-forward-outline.svg';
import CityContext from '../../store/city-context';
import icons from '../../assets/svgs/iconsMap';

const BottomCard = () => {
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
      <div className={classes.bottomCard_title}>MAX TEMPERATURE</div>
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
                src={
                  icons[
                    `day${cityCtx.threeDaysAgoData.forecast.forecastday['0'].day.condition.code}`
                  ]
                }
                alt={
                  cityCtx.threeDaysAgoData.forecast.forecastday['0'].day
                    .condition.text
                }
              />
              <span>
                {`${cityCtx.threeDaysAgoData.forecast.forecastday['0'].day.maxtemp_c}°C`}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>2 DAYS AGO</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={
                  icons[
                    `day${cityCtx.twoDaysAgoData.forecast.forecastday['0'].day.condition.code}`
                  ]
                }
                alt={
                  cityCtx.twoDaysAgoData.forecast.forecastday['0'].day.condition
                    .text
                }
              />
              <span>
                {`${cityCtx.twoDaysAgoData.forecast.forecastday['0'].day.maxtemp_c}°C`}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>YESTERDAY</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={
                  icons[
                    `day${cityCtx.yesterdayData.forecast.forecastday['0'].day.condition.code}`
                  ]
                }
                alt={cityCtx.yesterdayData.forecast.forecastday['0'].day}
              />
              <span>
                {`${cityCtx.yesterdayData.forecast.forecastday['0'].day.maxtemp_c}°C`}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>TODAY</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={
                  icons[
                    `day${cityCtx.forecastData.forecast.forecastday['0'].day.condition.code}`
                  ]
                }
                alt={
                  cityCtx.forecastData.forecast.forecastday['0'].day.condition
                    .text
                }
              />
              <span>
                {`${cityCtx.forecastData.forecast.forecastday['0'].day.maxtemp_c}°C`}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>TOMORROW</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={
                  icons[
                    `day${cityCtx.forecastData.forecast.forecastday['1'].day.condition.code}`
                  ]
                }
                alt={
                  cityCtx.forecastData.forecast.forecastday['1'].day.condition
                    .text
                }
              />
              <span>
                {`${cityCtx.forecastData.forecast.forecastday['1'].day.maxtemp_c} °C`}
              </span>
            </div>
          </div>

          <div className={classes.bottomCard_day}>
            <h1>IN 2 DAYS</h1>
            <div className={classes.bottomCard_temperature}>
              <img
                src={
                  icons[
                    `day${cityCtx.forecastData.forecast.forecastday['2'].day.condition.code}`
                  ]
                }
                alt={
                  cityCtx.forecastData.forecast.forecastday['2'].day.condition
                    .text
                }
              />
              <span>
                {`${cityCtx.forecastData.forecast.forecastday['2'].day.maxtemp_c} °C`}
              </span>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default BottomCard;
