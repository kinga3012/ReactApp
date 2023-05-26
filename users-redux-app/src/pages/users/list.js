import React, {Component} from "react";
import { connect } from "react-redux";
import { Container , Row, Col} from "react-bootstrap";
import { removeUser } from "../../actions/userActions";

class ListUsers extends Component {
    // constructor(props) {
    //     super(props);
    // }
    handleRemove = (id) => {
        this.props.remove(id);
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.props.usersCurrent.map((user) => (
                        <Col key={user.id}>
                            <h3>{user.firstname} {user.lastname}</h3>
                            <h4>Email: {user.email}</h4>
                            <button onClick={() => this.handleRemove(user.id)}>USUŃ</button>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        usersCurrent : state.userReducer.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    remove: id => dispatch(removeUser(id))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);