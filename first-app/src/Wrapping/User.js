import React, {Component} from "react";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kinga",
            lastname: "Foss",
            age: 23
        }
    }
    render() {
        return (
            <div className="UserData">
                <h1>{this.state.name}</h1>
                <h1>{this.state.lastname}</h1>
                <h1>{this.state.age} lata</h1>
                <h1>{this.props.sex}</h1>
            </div>
        )
    }
}
let Wrapper = (ContentToWrap) =>
{
    return class extends Component {
        render () {
            return (
            <div className="MessageData">
            <p>{this.props.message}</p>
            <ContentToWrap {...this.props} />
            </div>
        )}
    }
}

const HOC = Wrapper(User);
export default HOC;