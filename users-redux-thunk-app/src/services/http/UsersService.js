import routes from "./../../api";
import { fetchUsersError, fetchUsersInProgress, fetchUsersSuccess } from "./../../actions/usersActions";

const fetchAllUsers = () => {
    return dispatch => {
        dispatch(fetchUsersInProgress());
        fetch(routes.server + routes.route.api.users.get)
        .then(res => res.json())
        .then(res => {
            if (res.error) { throw res.error; }
            dispatch(fetchUsersSuccess(res.data));
            return res.users;
        })
        .catch(error => dispatch(fetchUsersError(error)))
    };
}
export default fetchAllUsers;