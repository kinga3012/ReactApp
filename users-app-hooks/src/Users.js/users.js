import React, {useState, useEffect} from "react";

const Users = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
    const data = await 
        fetch("https://reqres.in/api/users/")
        .then(res => res.json())
        .then(
            result => {
                setIsLoaded(true);
                setUsers(result.data);
            },
            error => {
                setError(error);
                setIsLoaded(true);
            }
        );
    };
    useEffect(() => {
        getUsers();
    }, []);

    if (error) {
        return (<div>Błąd: {error.message} </div>);
    }
    else if (!isLoaded) {
        return (<div>Ładowanie...</div>);
    }
    else {
        return (users.map(user => (
            <div key={user.id}>
                <img src={user.avatar} alt="foto" />
                <h4>{user.first_name}</h4>
                <h5>{user.email}</h5>
            </div>
        )));
    }
}
export default Users;