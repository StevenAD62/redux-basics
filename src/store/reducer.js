const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    let currentState = {}
    switch (action.type) {
        case 'INCREMENT':
            currentState = {counter: state.counter + 1}
            break;
        case 'DECREMENT':
            currentState = {counter: state.counter - 1}
            break;
        case 'ADD':
            currentState = {counter : state.counter + action.value}
            break;
        case 'SUBTRACT':
            console.log('STATE')
            currentState = {counter : state.counter - action.value}
            break;
        default:
            currentState = {...state}
    }
    return currentState
};

export default reducer;
