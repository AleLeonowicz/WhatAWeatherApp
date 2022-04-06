import classes from './Header.module.scss';

const Header = props => {
  return (
    <div className={classes.header}>
      <div className={classes.header_title}>
        A QUICK GUIDE ON WHAT TO WEAR IN A CURRENT WEATHER
      </div>
      <form className={classes.header_searchForm}>
        <input
          type="text"
          className={classes.header_searchFormInput}
          placeholder="Type in the city"
        />
        <btn className={classes.header_searchFormBtn}>SEARCH</btn>
      </form>
    </div>
  );
};

export default Header;
