import classes from './MiddleCard.module.scss';

const MiddleCard = props => {
  return (
    <div className={classes.middleCard}>
      <div className={classes.middleCard_theWeather}>
        <div className={classes.middleCard_title}>THE WEATHER</div>
        <div className={classes.middleCard_info1}>
          <h2>WIND: 6,1 km/h</h2>
          <h2>WIND DIRECTION: SW</h2>
          <h2>PRESSURE: 1009 hPa</h2>
          <h2>PRECIPITATION: 0,1 mm</h2>
        </div>
        <div className={classes.middleCard_info2}>
          <h2>HUMIDITY: 82%</h2>
          <h2>FEELS LIKE: 9,5°C</h2>
          <h2>VISABILITY: 10km</h2>
          <h2>INDEX UV: 1</h2>
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
