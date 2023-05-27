import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1}))
    }

    render() { 
        return (
            this.props.children(this.state.count, this.incrementCount)
        );
    }
}
 
export default Counter;