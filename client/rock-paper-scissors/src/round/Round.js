import React from "react";
import Games from '../services/Games';

class Round extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game: {
                rounds: [],
            }
        };
    }

    componentDidMount() {
        Games.show(this.props.createdGame.id).then(
            game => this.setState(game)
        );
    }

    roundNumber() {
        return this.state.game.rounds.length + 1;
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Round {this.roundNumber()}</h1>
                    <h2>[Player name]</h2>
                    <p>Choose your weapon!</p>
                    <div>
                        <button>Rock</button>
                        <button>Paper</button>
                        <button>Scissor</button>
                    </div>
                    <button>Ok</button>
                </div>
                <div>
                    <h1>Score</h1>
                    <div>
                        <div>Round</div>
                        <div>Winner</div>
                    </div>
                    <div>
                        <div>#1</div>
                        <div>[Player 1 name]</div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Round;