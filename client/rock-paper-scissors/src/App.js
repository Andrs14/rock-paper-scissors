import React from 'react';
import './App.css';
import PlayerForm from './player/PlayerForm';
import Ranking from './ranking/Ranking';
import Header from './header/Header';
import Game from './game/Game';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <Header/>
      <Router>
          <Route path="/" exact component={PlayerForm}/>
          <Route path="/game" component={Game}/>
          <Route path="/ranking" component={Ranking}/>
      </Router>
    </div>
  );
}

export default App;
