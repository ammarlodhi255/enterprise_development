import React from 'react';

const withCounter = (WrappedComponent, incrementVal) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        handleIncrement = () => {
            this.setState(prevState => ({ count: prevState.count + incrementVal }))
        }

        render() {
           return <WrappedComponent count={this.state.count} handleIncrement={this.handleIncrement} />
        }   
    }

    return WithCounter;
}

export default withCounter;