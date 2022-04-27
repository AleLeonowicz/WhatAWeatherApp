import { Fragment, useContext } from 'react';

import classes from './MainSection.module.scss';
import InfoCard from '../InfoCard/InfoCard';
import IllustrationCard from '../IllustrationCard/IllustrationCard';
import CityContext from '../../store/city-context';
import Spinner from '../Spinner/Spinner';

const MainSection = () => {
  const cityCtx = useContext(CityContext);
  // console.log('spinner', Spinner);
  return (
    <div className={classes.mainSection}>
      <div className={classes.mainSection_Card}>
        {cityCtx.renderSpinner && <Spinner />}
        {cityCtx.renderCards && (
          <Fragment>
            <InfoCard />
            <IllustrationCard />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default MainSection;
