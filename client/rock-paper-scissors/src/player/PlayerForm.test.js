import React from 'react';
import PlayerForm from './PlayerForm';
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';

describe('PlayerForm', () => {
    afterEach(cleanup);

    test('render without crashing', () => {
        expect(renderComponent()).not.toBeUndefined();
    });

    function renderComponent(onSubmit) {
        return render(<PlayerForm onSubmit={onSubmit}></PlayerForm>);
    }

    function dummyEvent(value) {
        return {
            target: {value: value}
        };
    }

    test('should handle players submit', () => {
        const onSubmit = jest.fn();
        const {getByTestId} = renderComponent(onSubmit);

        const expectedPlayer1 = {
            testId: 'player1',
            value: 'oriana'
        };
        const expectedPlayer2 = {
            testId: 'player2',
            value: 'adres'
        };

        [expectedPlayer1, expectedPlayer2].forEach(
            ({testId, value}) => fireEvent.change(getByTestId(testId), dummyEvent(value))
        );

        fireEvent.submit(getByTestId('form'));

        expect(onSubmit).toBeCalledWith(
            expect.objectContaining({
                player1: expectedPlayer1.value,
                player2: expectedPlayer2.value
            })
        );

    });
});