import { Fragment, useContext } from 'react';
import classes from './MainSection.module.scss';
import InfoCard from '../InfoCard/InfoCard';
import IllustrationCard from '../IllustrationCard/IllustrationCard';
import CityContext from '../../store/city-context';

const MainSection = props => {
  const cityCtx = useContext(CityContext);

  return (
    <div className={classes.mainSection}>
      <div className={classes.mainSection_Card}>
        {cityCtx.forecastData.location ? (
          <Fragment>
            <InfoCard />
            <IllustrationCard />
          </Fragment>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default MainSection;
