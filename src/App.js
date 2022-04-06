import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

import classes from './App.module.scss';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Header />
    </Fragment>
  );
}

export default App;
