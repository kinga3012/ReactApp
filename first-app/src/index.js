import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Book from './Book/Book';
import BookClass from './Book/BookClass';
import Age from './Age';
import Counter from './Counter/Counter';
import Counter_useState from './Counter/Counter_useState';
import Counter_useReducer from './Counter/Counter_useReducer.js';
import HOC from "./Wrapping/User"
import Refs from "./References/Refs"
import RefsMyInput from './References/RefsMyInput';
import First from "./ChildrenProperty/First";
import Second from "./ChildrenProperty/Second";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Book />
    <BookClass />
    <Age />
    <Age age={23} />
    <Counter />
    <Counter_useState />
    <Counter_useReducer />
    <HOC message="Wiadomość opkowująca obiekt" sex="Kobieta"/>
    <Refs />
    <RefsMyInput />
    <First>
      <Second />
    </First>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
