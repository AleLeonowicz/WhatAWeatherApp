import classes from './IllustrationCard.module.scss';

import woman2030 from '../../assets/fashionIcons/woman/2030.jpg';

const IllustrationCard = props => {
  return (
    <div className={classes.illustrationCard}>
      <img src={woman2030} alt={'woman2030'}></img>
    </div>
  );
};

export default IllustrationCard;
