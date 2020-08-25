import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Route, useLocation } from "react-router-dom";
import OldResumeMaker from './components/oldResumeMaker'

function App(props) {

  const location = useLocation();

  const goToRoute = (routeTarget) => {
    props.history.push(routeTarget)
  }



  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => goToRoute('/')}><h1 >resumeBlox</h1></div>
        <button onClick={() => goToRoute('/create_old')} className={location.pathname == "/create_old" ? "currentLink" : null}>CNR</button>
      </header>
      <Route path='/create_old' component={OldResumeMaker} />
    </div>
  );
}

export default App;
