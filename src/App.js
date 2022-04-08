import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';
import CityProvider from './store/CityProvider';

// import classes from './App.module.scss';

function App() {
  return (
    <CityProvider>
      <Navbar />
      <Header />
      <MainSection />
      <Footer />
    </CityProvider>
  );
}

export default App;
