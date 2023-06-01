import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { LoginPage } from "./pages/login/login";
import { Navigation } from "./partials/navigation/navigation";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    const {message, type} = this.props;
    return (
      <Container>
        <Row> 
        <Navigation />
        <div>{message !== undefined && (<div role="alert" className={type}>{message}</div>)}</div>
        </Row>
        <Row>
        <LoginPage />
        </Row>
      </Container>
    );
  };
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    message: PropTypes.string,
    type : PropTypes.string
  };
};

function mapStateToProps(state) {
  return {
    message : state.messageBoxReducer.message,
    type : state.messageBoxReducer.type
  };
};
export default connect(mapStateToProps, null)(App);