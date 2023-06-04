import { INCREASE, DECREASE, CLEAR, SET_VALUE } from "../actions/counterActions"

const counterReducer = (state, action) => {
    switch (action.type) {
        case INCREASE:
            return { counter : state.counter + 1}
        case DECREASE:
            return { counter : state.counter + 1}
        case CLEAR:
            return { counter : 0}
        case SET_VALUE:
            return { counter : action.value}
    }
}
export default counterReducer;