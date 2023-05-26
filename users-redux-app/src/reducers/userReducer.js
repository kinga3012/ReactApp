import { ADD_USER, REMOVE_USER } from "../actions/userActionsTypes";

let usersCounter = 0;
const initialState = {
    users: []
};

const userReducer = (state = initialState, action) =>
{
    if (action.type === ADD_USER) {
        let data = {id: ++usersCounter, ...action.user};
        return {
            users : [...state.users, data]
        };
    }
    else if (action.type === REMOVE_USER) {
        return {
            ...state,
            users : state.users.filter(user => user.id !== action.id)
        };
    }
    return state;
}
export default userReducer;