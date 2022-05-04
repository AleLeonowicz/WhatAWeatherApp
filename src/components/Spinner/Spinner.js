import classes from './Spinner.module.scss';
import spinner from '../../assets/spinner.svg';

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <img src={spinner} alt="spinner" />
    </div>
  );
};

export default Spinner;
