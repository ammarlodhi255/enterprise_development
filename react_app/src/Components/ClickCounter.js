import React from 'react';
import withCounter from './withCounter';

const ClickCounter = (props) => {
    return (
        <button onClick={ props.handleIncrement }> 
            Clicked { props.count } times
        </button>
    );
}
 
export default withCounter(ClickCounter, 1);