import { MESSAGE_CLEAR, MESSAGE_ERROR, MESSAGE_SUCCESS } from "./messageBoxActionsTypes";

const successMessage = message => {
    return {
        type : MESSAGE_SUCCESS,
        message
    };
};
const errorMessage = message => {
    return {
        type : MESSAGE_ERROR,
        message
    };
};
const clearMessage = () => {
    return {
        type : MESSAGE_CLEAR,
    };
};

export const messageBoxActions = {
    successMessage, errorMessage, clearMessage
};