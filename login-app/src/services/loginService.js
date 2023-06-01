import routes from "./../constants/http-routes";
import axios from "axios";

const login = async (username, password) => {
    const response = await axios.post(
        routes.server + routes.route.api.login.post,
        {username : username, password : password}
    );
    return response;
};

const logout = async () => {
    localStorage.removeItem("account");
    const response = await axios.get(
        routes.server + routes.route.api.logout.get,
    );
    return response;
};

export const loginService = {
    login, logout
};