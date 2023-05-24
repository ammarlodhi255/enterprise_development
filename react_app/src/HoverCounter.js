import React from 'react';
import withCounter from './withCounter';

class HoverCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, incrementCount } = this.props;
        return <h2 onMouseOver={incrementCount}>You hovered over this text { count } times.</h2>
    }
}

export default withCounter(HoverCounter, 1);