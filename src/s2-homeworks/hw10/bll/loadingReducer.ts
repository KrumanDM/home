const initState = {
    isLoading: false,
}

export type BooleanType = {
    isLoading: boolean
}

type ActionsType = LoadingActionType

export const loadingReducer = (state = initState, action: ActionsType): BooleanType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING': {
            let newState = {...state};
            newState.isLoading = action.isLoading
            return newState
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
