import React, {Component} from "react";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            email: "",
            avatar: ""
        }
    };
    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
        console.log(this.state);
    };
    handleSubmit = (event) => { // wysyłanie danych po zatwierdzeniu formularza
        alert("Wysyłanie formularza: " + JSON.stringify(this.state));
        fetch("https://reqres.in/api/users/", {
            method: "POST",
            body: JSON.stringify(this.state)
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(response) {
            console.log(response);
        })
        event.preventDefault();
    };
    render() { // formularz
        return (
        <div>
        <form onSubmit={this.handleSubmit} >
        <p>Imię: </p>
        <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
        <p>Email: </p>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        <p>Zdjęcie: </p>
        <input type="text" name="avatar" value={this.state.avatar} onChange={this.handleChange} />
        <p></p>
        <input type="submit" value="Wyślij" />
        </form>
        </div>);
    }
}
export default AddUser;