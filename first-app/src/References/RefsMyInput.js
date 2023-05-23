import React, {Component} from "react";
import MyInput from "./MyInput";
class RefsMyInput extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef();
    }
    focusInput = () => {
        this.input.current.focus();
    }
    render() {
        return (
            <div className="RefInputs">
                <hr />
                <MyInput type="text" ref={this.input} label="Mój przycisk"/>
                <input type="button" value="Wciśnij mnie!!!" onClick={this.focusInput} />
                <hr />
            </div>
        )
    }
}
export default RefsMyInput;