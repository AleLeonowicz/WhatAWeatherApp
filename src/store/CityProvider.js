import React, { useState, useEffect } from 'react';

import CityContext from './city-context';

const myKey = '7b6fd23c870d4c66bba124658220704';

const CityProvider = props => {
  const [userInput, setUserInput] = useState('');
  const [forecastData, setForecastData] = useState('');
  const [astronomyData, setAstronomyData] = useState('');
  const [yesterdayData, setYesterdayData] = useState('');
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
    fetchData(myKey, query);
  }, []);

  useEffect(() => {
    if (userInput !== '') {
      fetchData(myKey, userInput);
    }
  }, [userInput]);

  ///////////////////////////////////////////////////////////////////////////////////

  const getToday = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const date = yyyy + '-' + mm + '-' + dd;
    console.log('date', date);
    return date;
  };

  //////////////////////////////////////////////////////////////////////////////////

  const getYesterday = () => {
    const today = new Date();
    const dd = String(today.getDate() - 1).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    const date = yyyy + '-' + mm + '-' + dd;
    console.log('date', date);
    return date;
  };

  //////////////////////////////////////////////////////////////////////////////////

  const changeLink = query => {
    if ('URLSearchParams' in window) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set('query', query);
      const newRelativePathQuery =
        window.location.pathname + '?' + searchParams;
      window.history.pushState(null, '', newRelativePathQuery);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  const fetchData = async function (key, query) {
    const today = getToday();
    const yesterday = getYesterday();

    try {
      const [response1, response2, response3] = await Promise.all([
        fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=3&aqi=no&alerts=no`
        ),
        fetch(
          `https://api.weatherapi.com/v1/astronomy.json?key=${key}&q=${query}&dt=${today}`
        ),
        fetch(
          `https://api.weatherapi.com/v1/history.json?key=${key}&q=${query}&dt=${yesterday}`
        ),
      ]);

      // console.log('response', response);
      const data1 = await response1.json();
      const data2 = await response2.json();
      const data3 = await response3.json();

      console.log('data1', data1);
      console.log('data2', data2);
      console.log('data3', data3);

      if (data1.error) {
        setErrorMsg(data1.error.message);
        return;
      }

      if (data2.error) {
        setErrorMsg(data2.error.message);
        return;
      }

      if (data3.error) {
        setErrorMsg(data3.error.message);
        return;
      }

      setForecastData(data1);
      setAstronomyData(data2);
      setYesterdayData(data3);

      changeLink(query);

      return [data1, data2, data3];
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
    // event.target[0].value = '';
    // console.log('event.target[0].value', event.target[0].value);
  };

  ///////////////////////////////////////////////////////////////////////////////////

  const cityContext = {
    getUserInput: getUserInputHandler,
    forecastData: forecastData,
    astronomyData: astronomyData,
    yesterdayData: yesterdayData,
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
