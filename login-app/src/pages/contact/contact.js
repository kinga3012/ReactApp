import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";
// klasowo
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>Kontakt</Col>{" "}
                </Row>
            </Container>
        );
    }
}
export {Contact as ContactPage};