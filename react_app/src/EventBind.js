import React from 'react';

class EventBind extends React.Component {
    constructor(props) {
        super(props);
        this.changeMessage = this.changeMessage.bind(this);
        this.state = {
            message: 'Hello World'
        };
    }

    changeMessage() {
        this.setState({
            message: 'Hello Visitor'
        });
    }

    // Fourth way:

    // changeMessage = () => {
    //     this.setState({
    //         message: 'Hello Visitor'
    //     });
    // }

    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={this.changeMessage}>Change</button>
                 {/* Another ways around the binding issue: */}
                 {/* <button onClick={this.changeMessage.bind(this)}>Change</button> */}
                {/* <button onClick={() => this.changeMessage()}>Change</button> */}
            </div>
        )
    }
}

export default EventBind;