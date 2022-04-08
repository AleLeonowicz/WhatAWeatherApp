import CityContext from './city-context';

const cityContext = {};

const CityProvider = props => {
  return (
    <CityContext.Provider value={cityContext}>
      {props.children}
    </CityContext.Provider>
  );
};

export default CityProvider;
