import classes from './Navbar.module.scss';
import menu from '../../assets/menu_grid.svg';

const Navbar = props => {
  const goToHomePage = () => {
    window.location.href = window.location.origin;
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_content}>
        <div className={classes.navbar_logo} onClick={goToHomePage}>
          THE <span>WEA</span>THE<span>R</span>
        </div>
        <img className={classes.navbar_menu} src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
