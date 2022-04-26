import React, { useState, useEffect } from 'react';

import CityContext from './city-context';

import { fetchData } from '../API/index';

import { myKey } from '../constants/index';

const CityProvider = props => {
  const [userInput, setUserInput] = useState('');
  const [forecastData, setForecastData] = useState('');
  const [yesterdayData, setYesterdayData] = useState('');
  const [twoDaysAgoData, setTwoDaysAgoData] = useState('');
  const [threeDaysAgoData, setThreeDaysAgoData] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // if (window.location.search === '') {
    //   searchResultsView.insertPlaceholder();
    // }

    // if (window.location.search !== '') {
    //   view.renderSpinner();
    // }

    const query = searchParams.get('query');

    if (!query) return;
    fetchData(
      myKey,
      query,
      setErrorMsg,
      setForecastData,
      setYesterdayData,
      setTwoDaysAgoData,
      setThreeDaysAgoData
    );
  }, []);

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (userInput !== '') {
      fetchData(
        myKey,
        userInput,
        setErrorMsg,
        setForecastData,
        setYesterdayData,
        setTwoDaysAgoData,
        setThreeDaysAgoData
      );
    }
  }, [userInput]);

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
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const cityContext = {
    getUserInput: getUserInputHandler,
    forecastData: forecastData,
    yesterdayData: yesterdayData,
    twoDaysAgoData: twoDaysAgoData,
    threeDaysAgoData: threeDaysAgoData,
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
