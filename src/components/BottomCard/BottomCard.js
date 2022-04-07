import classes from './BottomCard.module.scss';

import weatherIcon1 from '../../assets/sunny-outline.svg';
import weatherIcon2 from '../../assets/partly-sunny-outline.svg';
import weatherIcon3 from '../../assets/sunny-outline.svg';

const BottomCard = props => {
  return (
    <div className={classes.bottomCard}>
      <div className={classes.bottomCard_day}>
        <h1>YESTERDAY</h1>
        <div className={classes.bottomCard_temperature}>
          <img src={weatherIcon1} alt="sunny" />
          <span>12°C</span>
        </div>
      </div>
      <div className={classes.bottomCard_day}>
        <h1>TOMORROW</h1>
        <div className={classes.bottomCard_temperature}>
          <img src={weatherIcon2} alt="partly sunny" />
          <span>7°C</span>
        </div>
      </div>
      <div className={classes.bottomCard_day}>
        <h1>IN 2 DAYS</h1>
        <div className={classes.bottomCard_temperature}>
          <img src={weatherIcon3} alt="sunny" />
          <span>9°C</span>
        </div>
      </div>
    </div>
  );
};

export default BottomCard;
