import {
    INCREMENT,
    DECREMENT,
    CHANGE_BY_AMOUNT
} from './actionTypes'

export const incrementAction = () => ({
    type: INCREMENT,
})

export const decrementAction = () => ({
    type: DECREMENT,
})

export const changeByAmount = (val) => ({
    type: CHANGE_BY_AMOUNT,
    payload: val,
})