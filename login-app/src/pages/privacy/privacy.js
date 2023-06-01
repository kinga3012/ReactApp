import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";

class Privacy extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>Polityka prywatności</Col>
                </Row>
            </Container>
        );
    }
}
export {Privacy as PrivacyPage};