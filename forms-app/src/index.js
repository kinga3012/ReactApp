import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Checkout from './pages/checkout/checkout';
//import FormikForm from './pages/formikCheckout/formik';
import Users from "./pages/usersAPI/users"
import AddUser from './pages/usersAPI/addUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Checkout /> */}
  {/* <FormikForm /> */}
  <Users />
  <AddUser />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
