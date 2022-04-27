import React, { useState, useEffect } from 'react';

import CityContext from './city-context';
import { fetchData } from '../API/index';

const CityProvider = props => {
  const [userInput, setUserInput] = useState('');
  const [forecastData, setForecastData] = useState(''); // { curent: { wind_mph: ''}
  const [yesterdayData, setYesterdayData] = useState('');
  const [twoDaysAgoData, setTwoDaysAgoData] = useState('');
  const [threeDaysAgoData, setThreeDaysAgoData] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [renderCards, setRenderCards] = useState(false);
  const [renderSpinner, setRenderSpinner] = useState(false);

  //////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    const query = searchParams.get('query');

    if (!query) return;
    fetchData(
      setRenderCards,
      setRenderSpinner,
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
        setRenderCards,
        setRenderSpinner,
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
    renderCards: renderCards,
    renderSpinner: renderSpinner,
  };

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <CityContext.Provider value={cityContext}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityProvider;
