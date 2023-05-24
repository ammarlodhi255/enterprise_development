import React from 'react';
import withCounter from './withCounter';

class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, incrementCount } = this.props;

        return <>
            <button onClick={ incrementCount }>Clicked { count } times</ button>
        </>
    }
}

export default withCounter(ClickCounter, 5);