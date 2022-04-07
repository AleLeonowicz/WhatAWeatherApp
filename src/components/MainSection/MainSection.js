import classes from './MainSection.module.scss';
import InfoCard from '../InfoCard/InfoCard';
import IllustrationCard from '../IllustrationCard/IllustrationCard';

const MainSection = props => {
  return (
    <div className={classes.mainSection}>
      <div className={classes.mainSection_Card}>
        <InfoCard />
        <IllustrationCard />
      </div>
    </div>
  );
};

export default MainSection;
