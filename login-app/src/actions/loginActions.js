import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./loginActionsTypes";
import { loginService } from "./../services/loginService";
import { messageBoxActions } from "./messageBoxActions";

const loginSuccess = user => {
    return {
        type : LOGIN_SUCCESS,
        user
    };
};

const loginFailure = error => {
    return {
        type : LOGIN_FAILURE,
        error
    };
};

const loginRequest = user => {
    return {
        type : LOGIN_REQUEST,
        user
    };
};
const login = (username, password) => {
    return async dispatch => {
        dispatch(loginRequest());
        await loginService.login(username,password)
        .then(
            user => {
                localStorage.setItem("account", JSON.stringify(user));
                dispatch(loginSuccess(user));
                dispatch(messageBoxActions.successMessage("Zalogowano!"));
            },
            error => {
                dispatch(loginFailure(error));
                dispatch(messageBoxActions.errorMessage("Zły login lub hasło!"));
            }
        );
    };
}
const logout = () => {
    loginService.logout();
    return {
        type : LOGOUT,
    };
};

export const loginActions = {
    login, logout
}