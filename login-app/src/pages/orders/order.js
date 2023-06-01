import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";
import { useParams } from "react-router-dom";

const Order = () => {
    let {id} = useParams();
    return (
        <Container>
            <Row>
                <Col>Zamówienie numer {id}</Col>
            </Row>
        </Container>
    );
}
export {Order as OrderPage};