export function increment(value) {
    return thunk({
        type: "INCREMENT",
        value
    });
}

export function decrement(value) {
    return thunk({
        type: "DECREMENT",
        value: 1
    });
}

export function asyncIncrement(value) {
    return thunk({
        type: "INCREMENT_ASYNC",
        value: 1
    });
}

export function control(payload) {
    return {
        type: "CONTROL",
        payload
    }
}

export function thunk(action) {
    const finAction  = {
        type: "METHODS",
        payload: action
    }

    return finAction;
}


//onInc: () => dispatch({ type: "INCREMENT", value: 1 }),
   // onDec: () => dispatch({ type: "DECREMENT", value: 1 }),
   // onIncAsync: () => dispatch({ type: "INCREMENT_ASYNC", value: 1 })