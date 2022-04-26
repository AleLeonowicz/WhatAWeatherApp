import React, { useContext, useState, useEffect } from 'react';
import CityContext from '../../store/city-context';

import classes from './Header.module.scss';

import { prohibitedSigns } from '../../constants/index';

const isInputValidHandler = (inputQuery, setErrorMsg) => {
  if (prohibitedSigns.some(sign => inputQuery.includes(sign))) {
    setErrorMsg('Special characters are not allowed.');
  } else {
    setErrorMsg('');
  }
};

const Header = props => {
  const cityCtx = useContext(CityContext);

  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputQuery, setInputQuery] = useState('');

  useEffect(() => {
    setInputQuery('');
  }, [cityCtx.forecastData]);

  const setInputQueryHandler = event => {
    setInputQuery(event.target.value);
  };

  useEffect(() => {
    isInputValidHandler(inputQuery, cityCtx.setErrorMsg);
  }, [inputQuery, cityCtx.setErrorMsg]);

  ///////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className={classes.header}>
      <div className={classes.header_title}>
        A QUICK GUIDE ON WHAT TO WEAR IN A CURRENT WEATHER
      </div>
      <form
        className={classes.header_searchForm}
        onSubmit={cityCtx.getUserInput}
      >
        <span>
          {cityCtx.errorMsg !== ''
            ? `${cityCtx.errorMsg} Please try again.`
            : ''}
        </span>
        <input
          type="text"
          className={classes.header_searchFormInput}
          placeholder={isInputFocused ? '' : 'Type in the city'}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          onChange={setInputQueryHandler}
          value={inputQuery}
        />
        <button className={classes.header_searchFormBtn}>SEARCH</button>
      </form>
    </div>
  );
};

export default Header;
