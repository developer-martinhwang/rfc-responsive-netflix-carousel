/**
 * Copyright (c)
 * All rights reserved. developer.martinhwang@gmail.com
 *
 * Filename: App.js
 *
 * Key Options:
 * - retrieve movies data using AJAX from movie API
 *
 * Revision History:
 * - 22 Dec, 2020, Martin Hwang <developer.martinhwang@gmail.com> : Created
 */
import React, { Fragment } from 'react'
import './App.css';
// material-ui core
import 
{ Box, 
  } from '@material-ui/core'
// components
import Carousel from './components/Carousel'
function App() {
  
  return (
    <Fragment>
      <Carousel />
    </Fragment>
  );
}

export default App;
