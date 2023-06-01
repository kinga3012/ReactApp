import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";

class Logout extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>Wyloguj</Col>
                </Row>
            </Container>
        );
    }
}
export {Logout as LogoutPage};