import * as actionTypes from './actions'

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            console.log('action :', action)
            return {persons: state.persons.concat(action.data)}
        case actionTypes.REMOVE_PERSON:
            return {persons: state.persons.filter(person => person.id !== action.personId)}
        default:
            return state
    }
};

export default reducer;
