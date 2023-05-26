import { ADD_USER, REMOVE_USER } from "./userActionsTypes";
export const addUser = (user) => {
    return {
        type: ADD_USER,
        user
    };
};
export const removeUser = (id) => {
    return {
        type: REMOVE_USER,
        id
    };
};