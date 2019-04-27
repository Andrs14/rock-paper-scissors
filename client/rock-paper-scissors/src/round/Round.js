import React from "react";

class Round extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Round [number]</h1>
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