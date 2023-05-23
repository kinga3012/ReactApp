import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    
    // gdyby nie były f.strzałkowe trzeba by przepisać kontekst!
    //this.increase = this.increase.bind(this);
    //this.decrease = this.decrease.bind(this);
    //this.clear = this.clear.bind(this)
    };
    increase = () => {
        this.setState((prevState) => ({
        counter : prevState.counter + 1}));
    }
    decrease = () => {
        this.setState((prevState) => ({
        counter : prevState.counter - 1}));
    }
    clear = () => {
        this.setState(() => ({
        counter : 0}));
    }
    setValue = (value) => {
        this.setState(() => ({
            counter: value
        }))
    }
    render() {
        return (
            <div className="App">
                <h1>Stan licznika to: {this.state.counter}</h1>
                <button onClick={this.increase}>Zwiększ</button>
                <button onClick={this.decrease}>Zmniejsz</button>
                <button onClick={this.clear}>Zeruj</button>
                <button onClick={() => this.setValue(parseInt(prompt("Podaj wartość")))}>Podaj wartość</button>
            </div>
        )
    }
};
export default Counter;