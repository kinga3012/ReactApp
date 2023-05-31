import React, {Component} from "react";
import {connect} from "react-redux";
import { loginActions } from "../../actions/loginActions";
import PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password: "",
            usernameError : false,
            passwordError : false
        };
    };
    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value});
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        const {username, password} = this.state;
        if (!username) {
            this.setState({usernameError: true});
        }
        if (!password) {
            this.setState({passwordError: true});
        }
        if (username && password) {
            await this.props.dispatch(loginActions.login(username,password));
        }
    };
    logoutReload = async (event) => {
        event.preventDefault();
        await this.props.dispatch(loginActions.logout());
        this.setState({
            username : "",
            password: "",
            usernameError : false,
            passwordError : false
        });
    }
    render() {
        return (
            <Container>
                <Row>
                    {!this.props.isLogged && (
                        <div>
                            <h2>Logowanie</h2>
                            {this.props.loginPending && "Logowanie w trakcie..."}
                            {this.state.usernameError && (<div>Nazwa użytkownika jest wymagana</div>)}
                            {this.state.passwordError && (<div>Hasło jest wymagane</div>)}
                            <form name="form" onSubmit={this.handleSubmit}>
                                <Row>
                                    <label htmlFor="username">Nazwa użytkownika:</label>
                                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <label htmlFor="password">Hasło:</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <button>Zaloguj</button>
                                </Row>
                           </form>
                        </div>
                    )}
                    {this.props.isLogged && <div><button onClick={this.logoutReload}>Wyloguj</button></div>}
                </Row>
            </Container>
        );
    }
    static propTypes = {
        dispatch: PropTypes.func,
        attributesUpdate: PropTypes.func,
        loginPending : PropTypes.bool,
        isLogged : PropTypes.bool
    };
};
function mapStateToProps(state) {
    return {
        loginPending : state.loginReducer.loginPending,
        isLogged : state.loginReducer.isLogged
    };
};

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };