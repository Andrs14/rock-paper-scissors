import React from 'react';
import './App.css';
import PlayerForm from './player/PlayerForm';
import Ranking from './ranking/Ranking';
import Header from './header/Header';
import Round from './round/Round';
import Winner from './winner/Winner';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Header/>
      <Router>
          <Route path="/" exact component={PlayerForm}/>
          <Route path="/round" component={Round}/>
          <Route path="/ranking" component={Ranking}/>
          <Route path="/winner" component={Winner}/>
      </Router>
    </div>
  );
}

export default App;
