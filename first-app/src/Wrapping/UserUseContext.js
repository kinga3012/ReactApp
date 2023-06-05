import React, {useState, useContext, createContext} from "react";

const UserContext = createContext();

const UserCon = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");

    return (
        <div>
            <UserContext.Provider value={{firstname, lastname, setFirstname, setLastname}} >
                Twoje imię to {firstname}, a nazwisko to {lastname}!
                <UserForm />
            </UserContext.Provider>
        </div>
    );
};
const UserForm = () => {
    const value = useContext(UserContext);
    return (
        <div>
            Imię: <input type="text" onChange={(event) => {value.setFirstname(event.target.value)}} />
            Nazwisko: <input type="text" onChange={(event) => {value.setLastname(event.target.value)}} />
        </div>
    )
}

export default UserCon;