import {
  getYesterday,
  getTwoDaysAgo,
  getThreeDaysAgo,
  changeLink,
} from '../utils/index';

export const fetchData = async function (
  key,
  query,
  setErrorMsg,
  setForecastData,
  setYesterdayData,
  setTwoDaysAgoData,
  setThreeDaysAgoData
) {
  const yesterday = getYesterday();
  const twoDaysAgo = getTwoDaysAgo();
  const threeDaysAgo = getThreeDaysAgo();

  try {
    const [response1, response2, response3, response4] = await Promise.all([
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}&days=3&aqi=no&alerts=no`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${key}&q=${query}&dt=${yesterday}`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${key}&q=${query}&dt=${twoDaysAgo}`
      ),
      fetch(
        `https://api.weatherapi.com/v1/history.json?key=${key}&q=${query}&dt=${threeDaysAgo}`
      ),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();

    // console.log('data1', data1);
    // console.log('data2', data2);
    // console.log('data3', data3);
    // console.log('data4', data4);

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

    if (data4.error) {
      setErrorMsg(data4.error.message);
      return;
    }

    setForecastData(data1);
    setYesterdayData(data2);
    setTwoDaysAgoData(data3);
    setThreeDaysAgoData(data4);

    changeLink(query);

    return [data1, data2, data3, data4];
  } catch (err) {
    console.error(`🔥🔥🔥 ${err}`);
  }
};
