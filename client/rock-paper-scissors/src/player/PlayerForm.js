import React from 'react';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player1: '',
            player2: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePlayer1 = this.changePlayer1.bind(this);
        this.changePlayer2 = this.changePlayer2.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        return this.props.onSubmit(this.state);
    }

    changePlayer1(event) {
        this.setState({player1: event.target.value});
    }

    changePlayer2(event) {
        this.setState({player2: event.target.value});
    }

    render() {
        return (
            <form data-testid="form" onSubmit={this.handleSubmit}>
                <h1>Who is going to play?</h1>
                <div>
                    <label>Player 1</label>
                    <input data-testid="player1" type="text" value={this.state.player1} onChange={this.changePlayer1}/>
                </div>
                <div>
                    <label>Player 2</label>
                    <input data-testid="player2" type="text" value={this.state.player2} onChange={this.changePlayer2}/>
                </div>
                <div>
                    <input type="submit" value="Start!"/>
                </div>
            </form>
        );
    }
}

export default PlayerForm;