import * as axios from 'axios';

const ROUTE = 'http://localhost:8000/games';

export default {
    ROUTE,
    create({player1, player2}) {
        return axios({
            url: ROUTE,
            method: 'post',
            data: {player1, player2}
        });
    },

    show(id) {
        return axios({
            url: `${ROUTE}/${id}`,
            method: 'get',
        });
    }
};