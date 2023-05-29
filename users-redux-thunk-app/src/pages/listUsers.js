import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";
import {connect} from "react-redux";
import fetchAllUsers from "./../services/http/UsersService";

class ListUsers extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getUsers();
        console.log(this.props.usersCurrent);
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.props.usersFetchingInProgress && <div>Ładowanie...</div>}
                    {this.props.usersCurrent &&
                    this.props.usersCurrent.map(user => (
                        <div key={user.id}>
                            <img src={user.avatar} alt="Avatar"/>
                            <h2>{user.first_name}</h2>
                            <h1>Email: {user.email}</h1>
                            <hr />
                        </div>
                    ))}
                </Row>
            </Container>
        );
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        usersCurrent : state.usersReducer.users,
        usersFetchingInProgress : state.usersReducer.inprogress
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers : () => {dispatch(fetchAllUsers());}
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);