import * as axios from 'axios';

const ROUTE = '/games';

export default {
    ROUTE,
    create({player1, player2}) {
        return axios.post(ROUTE, {player1, player2});
    }
};