import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import { LoginPage } from "./pages/login/login";
import { Navigation } from "./partials/navigation/navigation";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import { OrdersPage } from "./pages/orders/orders";
import { LogoutPage } from "./pages/login/logout";
import { PrivacyPage } from "./pages/privacy/privacy";
import { AboutPage } from "./pages/about/about";
import { ContactPage } from "./pages/contact/contact";
import { NotFoundPage } from "./pages/notFound/notFound";
import { OrderPage } from "./pages/orders/order";
import Protected  from "./components/privateRoute";

class App extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    const {message, type, isLogged} = this.props;
    return (
      <BrowserRouter>
      <Container>
        <Row> 
        <Navigation />
        <div>{message !== undefined && (<div role="alert" className={type}>{message}</div>)}</div>
        </Row>
        {/* <Row>
        <LoginPage />
        </Row> */}
      </Container>
      <Routes>
       <Route path="/orders" element={
              <Protected isSignedIn={isLogged}> <OrdersPage /> </Protected> 
              } />
        <Route path="/order/:id" element={<OrderPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/logout" element={<LogoutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/privacy" element={<PrivacyPage/>} />
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>
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
    type : state.messageBoxReducer.type,
    isLogged : state.loginReducer.isLogged
  };
};
export default connect(mapStateToProps, null)(App);