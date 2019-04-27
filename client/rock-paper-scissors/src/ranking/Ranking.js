import React from 'react';

class Ranking extends React.Component {
    render() {
        return (
            <div>
                <h1>Rankings</h1>
                <table>
                    <tr>
                        <th>Place</th>
                        <th>Player</th>
                        <th>Number of wins</th>
                        <th>Favorite weapon</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Player 1</td>
                        <td>28329</td>
                        <td>Rock</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Ranking;