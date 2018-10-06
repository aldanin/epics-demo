const initialState = {
    counter: 0
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case 'INCREMENT':
            newState.counter++;
            return newState;
        case 'INCREMENT_IF_ODD':
            newState.counter  = (newState.counter  % 2 !== 0) ? newState.counter  + 1 : newState.counter
            return newState
        case 'DECREMENT':
            newState.counter--;
            return newState;
        default:
            return newState
    }
    return newState;
};

export default reducer;