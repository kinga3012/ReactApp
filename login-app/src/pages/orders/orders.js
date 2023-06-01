import React, {Component} from "react";
import {Row, Col, Container} from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Orders = () => {
    let sort = new URLSearchParams(useLocation().search);
    return (
        <Container>
            <Row>
                <Col>Zamówienia posortowane {sort.get("sort")}</Col>
            </Row>
        </Container>
    );
}
export {Orders as OrdersPage};