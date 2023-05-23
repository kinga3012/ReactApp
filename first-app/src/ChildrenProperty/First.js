import React, {Component} from "react";
class First extends Component {
    render() {
        return (
            <div>
                <p>Początek First</p>
                <h1>Wiadomość od First</h1>
                {this.props.children}
                <p>I pozostała część od First...</p>
            </div>
        )
    }
}
export default First;