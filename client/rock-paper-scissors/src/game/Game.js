import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import PlayerForm from "../player/PlayerForm";
import Winner from "../winner/Winner";
import Round from "../round/Round";
import Games from '../services/Games';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            createdGame: undefined,
            createdRound1: undefined,
            createdRound2: undefined,
            createdRound3: undefined
        };
        this.createGame = this.createGame.bind(this);
    }

    createGame(state) {
        Games.create(state).then((res) => {
            this.setState(() => ({
                createdGame: res
            }))
        });
    }

    render() {
        if(this.state.createdGame) {
            return <Round createdGame={this.state.createdGame} />;
        }

        return (
            <Router>
                <Route
                    path="/" exact
                    render={props => <PlayerForm {...props} onSubmit={this.createGame}/>}/>
            </Router>
        );
    }
}

export default Game;