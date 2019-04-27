import React from 'react';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Who is going to play?</h1>
                <div>
                    <label>Player 1</label>
                    <input/>
                </div>
                <div>
                    <label>Player 2</label>
                    <input/>
                </div>
                <div>
                    <button>Start!</button>
                </div>
            </div>
        );
    }
}

export default PlayerForm;