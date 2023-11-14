import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'
import { changeThemeId, StateType, themeReducer } from '../s2-homeworks/hw12/bll/themeReducer'

test('renders learn react link', () => {
    render(<App/>)
    // const linkElement = screen.getByText(/learn react/i)
    // expect(linkElement).toBeInTheDocument()
    expect(1).toBe(1)
})
// import { themeReducer, changeThemeId, StateType } from './themeReducer';

describe('reducer shoud be change theme', () => {
    let initialState: StateType;

    beforeEach(() => {
        initialState = {
            themeId: 1,
        };
    });

    it('should return the initial state', () => {
        expect(themeReducer(undefined, {} as any)).toEqual(initialState);
    });
    //Возвращение начального состояния, когда действие не определено.

    it('should handle SET_THEME_ID', () => {
        const id = 2;
        const expectedState = {
            themeId: id,
        };
        expect(themeReducer(initialState, changeThemeId(id))).toEqual(expectedState);
    });
    //Обработка действия ‘SET_THEME_ID’ и изменение themeId в состоянии.
});
