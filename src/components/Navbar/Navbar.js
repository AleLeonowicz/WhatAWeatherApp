import classes from './Navbar.module.scss';
import menu from '../../assets/menu_grid.svg';

const Navbar = props => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar_content}>
        <div className={classes.navbar_logo}>
          THE WEA<span>THE</span>R
        </div>
        <img className={classes.navbar_menu} src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Navbar;
