import React, {Component} from "react";

class Refs extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    focusInput = () => {
        this.input.current.focus();
    }
    render() {
        return (
            <div className="App">
                <input type="text" ref={this.input} />
                <input type="button" value="Wciśnij mnie!!!" onClick={this.focusInput} />
            </div>
        )
    }
}
export default Refs;