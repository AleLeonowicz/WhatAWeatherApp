import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';

import classes from './App.module.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <MainSection />
      <Footer />
    </Fragment>
  );
}

export default App;
