export const getYesterday = () => {
  const today = new Date();
  const dd = String(today.getDate() - 1).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const date = yyyy + '-' + mm + '-' + dd;
  //   console.log('date', date);
  return date;
};

//////////////////////////////////////////////////////////////////////////////////

export const getTwoDaysAgo = () => {
  const today = new Date();
  const dd = String(today.getDate() - 2).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const date = yyyy + '-' + mm + '-' + dd;
  //   console.log('date', date);
  return date;
};

//////////////////////////////////////////////////////////////////////////////////

export const getThreeDaysAgo = () => {
  const today = new Date();
  const dd = String(today.getDate() - 3).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  const date = yyyy + '-' + mm + '-' + dd;
  //   console.log('date', date);
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
