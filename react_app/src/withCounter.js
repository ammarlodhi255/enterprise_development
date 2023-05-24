import React from 'react';

const withCounter = (WrappedComponent, increments) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            };
        }

        incrementCount = () => {
            this.setState(prevState => ({ count: prevState.count + increments }));
        }


        render() {
            return <>
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            </>
        }
    }

    return WithCounter;
}

export default withCounter;