import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PlayerForm from "../player/PlayerForm";
import Winner from "../winner/Winner";
import Round from "../round/Round";

class Game extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={PlayerForm}/>
                <Route path="/winner" component={Winner}/>
                <Route path="/round" component={Round}/>
            </Router>
        );
    }
}

export default Game;