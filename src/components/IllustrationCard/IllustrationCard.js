import React, { useContext } from 'react';

import classes from './IllustrationCard.module.scss';
import woman100 from '../../assets/fashionIcons/woman/100.jpg';
import woman010 from '../../assets/fashionIcons/woman/010.jpg';
import woman1020 from '../../assets/fashionIcons/woman/1020.jpg';
import woman2030 from '../../assets/fashionIcons/woman/2030.jpg';
import woman3040 from '../../assets/fashionIcons/woman/3040.jpg';
import CityContext from '../../store/city-context';

const IllustrationCard = () => {
  const cityCtx = useContext(CityContext);
  return (
    <div className={classes.illustrationCard}>
      {+cityCtx.forecastData.current.temp_c > 30 ? (
        <img src={woman3040} alt={'woman3040'}></img>
      ) : +cityCtx.forecastData.current.temp_c > 20 ? (
        <img src={woman2030} alt={'woman2030'}></img>
      ) : +cityCtx.forecastData.current.temp_c > 10 ? (
        <img src={woman1020} alt={'woman1020'}></img>
      ) : +cityCtx.forecastData.current.temp_c > 0 ? (
        <img src={woman010} alt={'woman010'}></img>
      ) : (
        <img src={woman100} alt={'woman100'}></img>
      )}
    </div>
  );
};

export default IllustrationCard;
