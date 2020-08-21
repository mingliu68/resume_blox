import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Route, useLocation } from "react-router-dom";
import ResumeMaker from './components/ResumeMaker'

function App(props) {

  const location = useLocation();

  const goToRoute = (routeTarget) => {
    props.history.push(routeTarget)
  }



  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => goToRoute('/')}><h1 >resumeBlox</h1></div>
        <button onClick={() => goToRoute('/create')} className={location.pathname == "/create" ? "currentLink" : null}>Create a new Resume</button>
      </header>
      <Route path='/create' component={ResumeMaker} />
    </div>
  );
}

export default App;
