import React, {Component} from "react";
import {Row, Container} from "react-bootstrap";
import MyInput from "../../components/forms/MyInput";
import MySelect from "../../components/forms/MySelect";
import MyTextArea from "../../components/forms/MyTextArea";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname : "",
            lastname : "",
            hobby : "",
            aboutMe : "",
            zaznaczajka : false,
            errors : {
                firstnameError : "",
                lastnameError : "",
                hobbyError : "",
                aboutMeError : "",
                zaznaczajkaError : ""
            }
        };
    };            
    hobbies = [
                {id: "nr.1", name: "Brak"},
                {id: "nr.2", name: "Sport"},
                {id: "nr.3", name: "Książki"},
                {id: "nr.4", name: "Seriale"}
            ];
    changeHandler = (event) => {
         let inputName = event.target.name;
         let inputValue = 
         event.target.type === "checkbox" ? event.target.checked : event.target.value;

         this.setState((prevState) => ({...prevState, [inputName]: inputValue}));
        // console.log([inputName] + " : " + inputValue);
        // console.log(this.state.firstname);
        
        //this.setState({firstname: event.target.value})
        if (inputName === "firstname")
        {
            if (inputValue.length <= 2)
                this.setState((prevState) => ({errors: {...prevState.errors, firstnameError: "Imię powinno mieć więcej niż 2 znaki!"}}));
            else
                this.setState((prevState) => ({errors: {...prevState.errors, firstnameError: ""}}));
        }
    }
    submissionHandler = (event) => {
        event.preventDefault(); // zatrzymanie obsługi formularza
        console.log(this.state);
    }
    render() {
        return (
            <Container>
            <form onSubmit={this.submissionHandler}>
            <Row>                
                <h1>Witamy przy kasie!</h1>
                <h2>Podaj dane do wysyłki:</h2>
                <MyInput type="text" name="firstname" className="inputStyle" label="Imię" onChange={this.changeHandler} value={this.state.firstname} error={this.state.errors.firstnameError}/>
                <MyInput type="text" name="lastname" className="inputStyle" label="Nazwisko" value={this.state.lastname} onChange={this.changeHandler} error={this.state.errors.lastnameError}/>
                {/* <p>Imię: </p> */}
                {/* <input type="text" name="firstname" /> */}
                {/* <p>Nazwisko: </p> */}
                {/* <input type="text" name="lastname" /> */}
            </Row>
            <Row>
                <MySelect name="hobby" className="inputStyle" label="Hobby" value={this.state.hobby} onChange={this.changeHandler} options={this.hobbies} error={this.state.errors.hobbyError}/>
            </Row>
            <Row>                
                <MyTextArea type="text" name="aboutMe" className="inputStyle" label="O mnie" onChange={this.changeHandler} value={this.state.aboutMe} error={this.state.errors.aboutMeError}/>
            </Row>
            <Row>                
                <MyInput type="checkbox" name="zaznaczajka" className="inputStyle" label="Zaznaczajka" onChange={this.changeHandler} value={this.state.zaznaczajka} error={this.state.errors.zaznaczajkaError}/>
            </Row>
            <Row>
                <MyInput type="submit" className="inputStyle" value="Wyślij" />
            </Row>            
            <Row>
                <h2>Podane dane:</h2>
                <p>Imię: {this.state.firstname === "" ? "NIE PODANO!" : this.state.firstname}</p>
                <p>Nazwisko: {this.state.lastname === "" ? "NIE PODANO!" : this.state.lastname}</p>
                <p>Hobby: {this.state.hobby === "" ? "NIE PODANO!" : this.state.hobby}</p>
                <p>O mnie: {this.state.aboutMe === "" ? "NIE PODANO!" : this.state.aboutMe}</p>
                <p>Zaznaczajka: {this.state.zaznaczajka ? "TAK!" : "NIE!"}</p>
            </Row>
            </form>
            </Container>
        );
    }
}
export default Checkout;