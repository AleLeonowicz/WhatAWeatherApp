import React, { useState, useEffect } from 'react';

import CityContext from './city-context';

const myKey = '7b6fd23c870d4c66bba124658220704';

const CityProvider = props => {
  const [userInput, setUserInput] = useState('');
  const [fetchedData, setFetchedData] = useState('');

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (userInput !== '') {
      fetchData(myKey, userInput);
    }
  }, [userInput]);

  ///////////////////////////////////////////////////////////////////////////////////

  const fetchData = async function (key, query) {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no&dt=2022-04-08`
    );
    const data = await response.json();
    console.log('data', data);
    if (data.totalItems === 0) {
      return;
    }
    setFetchedData(data);
    return data;
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const getUserInputHandler = event => {
    event.preventDefault();
    if (event.target[0].value.trim(' ') === '') {
      return;
    }
    setUserInput(event.target[0].value);
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const cityContext = {
    getUserInput: getUserInputHandler,
    fetchedData: fetchedData,
  };

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <CityContext.Provider value={cityContext}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityProvider;
