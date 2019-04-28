import * as axios from 'axios';
import * as faker from 'faker';
import Games from './Games';

jest.mock('axios');

describe('Games service', () => {

    describe('create', () => {
        test('request to create a game', () => {
            axios.post.mockResolvedValueOnce(() => {
                const id = faker.random.uuid();
                return {
                    status: 201,
                    data:{
                        id: id,
                        resource: `games/${id}`
                    }
                };
            });

            const params = {
                player1: 'mario',
                player2: 'luigi'
            };

            return Games.create(params).then(() => {
                expect(axios.post).toBeCalledWith(
                    Games.ROUTE,
                    expect.objectContaining(params)
                );
            })
        });
    });
});