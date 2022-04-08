import React, { useState, useEffect } from 'react';

import CityContext from './city-context';

const myKey = '7b6fd23c870d4c66bba124658220704';

const CityProvider = props => {
  const [userInput, setUserInput] = useState('');
  const [fetchedData, setFetchedData] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (userInput !== '') {
      fetchData(myKey, userInput);
    }
  }, [userInput]);

  ///////////////////////////////////////////////////////////////////////////////////

  const fetchData = async function (key, query) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${key}&q=${query}&aqi=no&dt=2022-04-08`
      );
      console.log('response', response);
      const data = await response.json();
      console.log('data', data);

      if (data.error) {
        setErrorMsg(data.error.message);
        return;
      }

      setFetchedData(data);
      return data;
    } catch (err) {
      console.error(`🔥🔥🔥 ${err}`);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const getUserInputHandler = event => {
    setErrorMsg('');
    event.preventDefault();
    if (
      event.target[0].value.trim(' ') === '' ||
      event.target[0].value.trim(' ').length < 3
    ) {
      setErrorMsg('You need to type at least 3 characters.');
      return;
    }
    setUserInput(event.target[0].value);
    event.target[0].value = '';
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const cityContext = {
    getUserInput: getUserInputHandler,
    fetchedData: fetchedData,
    errorMsg: errorMsg,
    setErrorMsg: setErrorMsg,
  };

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <CityContext.Provider value={cityContext}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityProvider;
