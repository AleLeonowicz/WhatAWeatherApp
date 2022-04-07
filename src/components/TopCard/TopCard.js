import classes from './TopCard.module.scss';

import weatherIcon from '../../assets/partly-sunny-outline.svg';

const TopCard = props => {
  return (
    <div className={classes.topCard}>
      <div className={classes.topCard_title}>
        <h1>BERLIN</h1>
        <h2>LOCAL TIME: 2022-04-06 9:42</h2>
      </div>
      <div className={classes.topCard_mainInfo}>
        <h2>CITY: BERLIN </h2>
        <h2>REGION: BERLIN, BRANDENBURG</h2>
        <h2>COUNTRY: GERMANY</h2>
        <h2>TODAY: PARTLY CLOUDY</h2>
      </div>
      <div className={classes.topCard_temperature}>
        <img src={weatherIcon} alt="partly sunny"></img>
        <h1>8°C</h1>
      </div>
    </div>
  );
};

export default TopCard;
