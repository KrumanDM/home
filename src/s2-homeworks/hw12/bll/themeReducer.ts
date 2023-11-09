const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: SetThemeActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': 
            return {
                ...state,    themeId: action.id };
        default:
            return state
    }
}

export const changeThemeId = (id: number): { type: string, id: number } => ({ type: 'SET_THEME_ID', id }) // fix any

export type SetThemeActionType = ReturnType<typeof changeThemeId>

export type StateType = {
    themeId:number
}