import React, { useContext } from 'react';

import classes from './IllustrationCard.module.scss';
import woman2030 from '../../assets/fashionIcons/woman/2030.jpg';
import woman3040 from '../../assets/fashionIcons/woman/3040.jpg';
import CityContext from '../../store/city-context';

const IllustrationCard = () => {
  const cityCtx = useContext(CityContext);
  return (
    <div className={classes.illustrationCard}>
      {+cityCtx.forecastData.current.temp_c > 30 ? (
        <img src={woman3040} alt={'woman3040'}></img>
      ) : (
        <img src={woman2030} alt={'woman2030'}></img>
      )}
    </div>
  );
};

export default IllustrationCard;
