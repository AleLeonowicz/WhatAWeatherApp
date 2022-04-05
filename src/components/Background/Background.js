import startPic from '../../assets/start-pic.jpg';
import classes from './Background.module.scss';

const Background = props => {
  return (
    <div className={classes['main-img']}>
      <img src={startPic} alt="Beach on a sunny day" />
      <div className={classes.overlay}></div>
    </div>
  );
};

export default Background;
