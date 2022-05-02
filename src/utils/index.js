var dayjs = require('dayjs');

export const getYesterday = () => {
  const date = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
  // console.log('date', date);
  return date;
};

//////////////////////////////////////////////////////////////////////////////////

export const getTwoDaysAgo = () => {
  const date = dayjs().subtract(2, 'day').format('YYYY-MM-DD');
  // console.log('date', date);
  return date;
};

//////////////////////////////////////////////////////////////////////////////////

export const getThreeDaysAgo = () => {
  const date = dayjs().subtract(3, 'day').format('YYYY-MM-DD');
  // console.log('date', date);
  return date;
};

//////////////////////////////////////////////////////////////////////////////////

export const changeLink = query => {
  if ('URLSearchParams' in window) {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('query', query);
    const newRelativePathQuery = window.location.pathname + '?' + searchParams;
    window.history.pushState(null, '', newRelativePathQuery);
  }
};

//////////////////////////////////////////////////////////////////////////////////

export const goToHomePage = () => {
  window.location.href = window.location.origin;
};

//////////////////////////////////////////////////////////////////////////////////

export const chooseFontSize = (ctx, classes) => {
  if (
    ctx.forecastData.location.name.toUpperCase().length > 15 &&
    ctx.forecastData.location.name.toUpperCase().length < 35
  ) {
    return classes.topCard_title_small;
  }
  if (ctx.forecastData.location.name.toUpperCase().length > 35) {
    return classes.topCard_title_extrasmall;
  }
  return classes.topCard_title_big;
};
