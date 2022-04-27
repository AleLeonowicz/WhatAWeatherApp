import TopCard from '../TopCard/TopCard';
import MiddleCard from '../MiddleCard/MiddleCard';
import BottomCard from '../BottomCard/BottomCard';

import classes from './InfoCard.module.scss';

const InfoCard = () => {
  return (
    <div className={classes.infoCard}>
      <TopCard />
      <MiddleCard />
      <BottomCard />
    </div>
  );
};

export default InfoCard;
