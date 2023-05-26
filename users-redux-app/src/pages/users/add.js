import React, {Component} from "react";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";
import { Container , Row} from "react-bootstrap";

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {
                firstname: "",
                lastname: "",
                email: ""
            }
        };
    }
    handleChange = (event) => {
        this.setState((prevState) => ({
            user : {
                ...prevState.user,
                [event.target.name] : event.target.value
            }
        }));
    }
    handleSubmit = () => {
        this.props.addUserToState(this.state.user);
        this.setState({user: []});
    }
    render() {
        return (
            <Container>
                <Row>
                    <label htmlFor="firstname">Imię: </label>
                    <input type="text" name="firstname" value={this.state.user.firstname} onChange={this.handleChange} />
                </Row>
                <Row>
                    <label htmlFor="lastname">Nazwisko: </label>
                    <input type="text" name="lastname" value={this.state.user.lastname} onChange={this.handleChange} />
                </Row>
                <Row>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" value={this.state.user.email} onChange={this.handleChange} />
                </Row>
                <Row>
                    <button onClick={this.handleSubmit}>Dodaj użytkownika</button>
                </Row>
            </Container>
        );
    }
}
// wysłanie akcji (żądania do reduktora), zwraca nową funkcję dostępną w props
const mapDispatchToProps = (dispatch) => {
    return {addUserToState : user => {dispatch(addUser(user))}};
}
// połączenie kodu komponentu z Reduksem
export default connect(null, mapDispatchToProps)(Add);