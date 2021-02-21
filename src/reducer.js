import {
    INCREMENT,
    DECREMENT,
    CHANGE_BY_AMOUNT
} from './actionTypes'

const initialState = {
    counter: { amount: 0 }
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    if (type === INCREMENT) {
        return {
            ...state,
            counter: { amount: state.counter.amount + 1 }
        }
    }

    if (type === DECREMENT) {
        return {
            ...state,
            counter: { amount: state.counter.amount - 1 }
        }
    }

    
    if (type === CHANGE_BY_AMOUNT) {
        return {
            ...state,
            counter: { amount: payload }
        }
    }

    return state;

}