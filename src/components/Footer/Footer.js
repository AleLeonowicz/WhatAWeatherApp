import { Fragment } from 'react';
import classes from './Footer.module.scss';
import github from '../../assets/github-logo.svg';
import linkedin from '../../assets/linkedin-logo.svg';

const Footer = props => {
  return (
    <Fragment>
      <div className={classes.footerMain}>
        <h4 className={classes.footerMain_signature}>
          @ 2022 Built and designed by Aleksandra Leonowicz
        </h4>
        <div className={classes.footerMain_imgContainer}>
          <a
            href="https://github.com/AleLeonowicz"
            target="_blank"
            rel="noreferrer"
          >
            <img className={classes.github} src={github} alt="Github link" />
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandra-leonowicz/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn link" />
          </a>
        </div>
      </div>
      <div className={classes.footerBottom}></div>
    </Fragment>
  );
};

export default Footer;
