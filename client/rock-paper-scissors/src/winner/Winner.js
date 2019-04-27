import React from 'react';

class Winner extends React.Component {
    render() {
        return (
            <div>
                <h1>We have a winner!!</h1>
                <h2>[Player 1] is the new Emperor!</h2>
                <button>Play again</button>
            </div>
        )
    }
}

export default Winner;