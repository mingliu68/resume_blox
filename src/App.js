import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Route, useLocation } from "react-router-dom";
import OldResumeMaker from './components/oldResumeMaker'
import ResumeMakerView from './views/resumeMaker-view';

function App(props) {

  const location = useLocation();

  const goToRoute = (routeTarget) => {
    props.history.push(routeTarget)
  }



  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => goToRoute('/')}><h1 >resumeBlox</h1></div>
        <div>
          <button onClick={() => goToRoute('/create_old')} className={location.pathname == "/create_old" ? "currentLink" : null}>CNR</button>
          <button onClick={() => goToRoute("/create")} className={location.pathname == "/create" ? "currentLink" : null}>Create New Resume</button>
        </div>
      </header>
      <Route path='/create_old' component={OldResumeMaker} />
      <Route path='/create' component={ResumeMakerView} />
    </div>
  );
}

export default App;
