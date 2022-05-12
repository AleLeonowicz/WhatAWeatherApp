import {
  getYesterday,
  getTwoDaysAgo,
  getThreeDaysAgo,
  changeLink,
} from '../utils/index';

import { myKey } from '../constants/index';

export const fetchData = async function (
  setRenderCards,
  setRenderSpinner,
  query,
  setErrorMsg,
  setForecastData,
  setYesterdayData,
  setTwoDaysAgoData,
  setThreeDaysAgoData
) {
  setRenderCards(false);
  setRenderSpinner(true);
  const yesterday = getYesterday();
  const twoDaysAgo = getTwoDaysAgo();
  const threeDaysAgo = getThreeDaysAgo();

  try {
    const [response1, response2, response3, response4] = await Promise.all([
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${myKey}&q=${query}&days=3&aqi=no&alerts=no`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${myKey}&q=${query}&dt=${yesterday}`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${myKey}&q=${query}&dt=${twoDaysAgo}`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${myKey}&q=${query}&dt=${threeDaysAgo}`
      ),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();

    if (data1.error) {
      setErrorMsg(data1.error.message);
      setRenderSpinner(false);
      return;
    }

    if (data2.error) {
      setErrorMsg(data2.error.message);
      setRenderSpinner(false);
      return;
    }

    if (data3.error) {
      setErrorMsg(data3.error.message);
      setRenderSpinner(false);
      return;
    }

    if (data4.error) {
      setErrorMsg(data4.error.message);
      setRenderSpinner(false);
      return;
    }

    setForecastData(data1);
    setYesterdayData(data2);
    setTwoDaysAgoData(data3);
    setThreeDaysAgoData(data4);

    changeLink(query);

    setRenderSpinner(false);
    setRenderCards(true);

    return [data1, data2, data3, data4];
  } catch (err) {
    console.error(`🔥🔥🔥 ${err}`);
  }
};
