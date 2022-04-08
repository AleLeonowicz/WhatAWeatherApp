import React, { useState, useEffect } from 'react';

import classes from './Header.module.scss';

const myKey = '7b6fd23c870d4c66bba124658220704';
// const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`;

const Header = props => {
  const [userInput, setUserInput] = useState('');
  const [fetchedData, setFetchedData] = useState('');

  useEffect(() => {
    if (userInput !== '') {
      fetchData(myKey, userInput);
    }
  }, [userInput]);

  const fetchData = async function (key, query) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no`
    );
    const data = await response.json();
    console.log('data', data);
    if (data.totalItems === 0) {
      return;
    }
    setFetchedData(data);
    console.log('fetchedData', fetchedData);
  };

  const getUserInputHandler = event => {
    event.preventDefault();
    console.log('event', event);
    console.log('event.target[0].value', event.target[0].value);

    if (event.target[0].value.trim(' ') === '') {
      return;
    }
    setUserInput(event.target[0].value);
    // console.log('userInput', userInput);
    // fetchData(myKey, event.target[0].value);
  };

  return (
    <div className={classes.header}>
      <div className={classes.header_title}>
        A QUICK GUIDE ON WHAT TO WEAR IN A CURRENT WEATHER
      </div>
      <form
        className={classes.header_searchForm}
        onSubmit={getUserInputHandler}
      >
        <input
          type="text"
          className={classes.header_searchFormInput}
          placeholder="Type in the city"
        />
        <button className={classes.header_searchFormBtn}>SEARCH</button>
      </form>
    </div>
  );
};

export default Header;
