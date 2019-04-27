import React from 'react';
import './App.css';
import Ranking from './ranking/Ranking';
import Header from './header/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Game from "./game/Game";

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
          <Route path='/' component={Game}/>
          <Route path="/ranking" component={Ranking}/>

      </Router>
    </div>
  );
}

export default App;
