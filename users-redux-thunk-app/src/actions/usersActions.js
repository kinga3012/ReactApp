import { FETCH_USERS_ERROR, FETCH_USERS_INPROGRESS, FETCH_USERS_SUCCESS } from "./usersActionsTypes";

export const fetchUsersInProgress = () => {
    return {
        type : FETCH_USERS_INPROGRESS
    };
}
export const fetchUsersSuccess = (users) => {
    return {
        type : FETCH_USERS_SUCCESS,
        users : users
    };
}
export const fetchUsersError = (error) => {
    return {
        type : FETCH_USERS_ERROR,
        error : error
    };
}