import React from 'react';
import withCounter from './withCounter';
const HoverCount = (props) => {
    const { count, handleIncrement } = props;
    return (
        <h1 onMouseOver={handleIncrement}>Hovered { count } times</h1>
    );
}
 
export default withCounter(HoverCount, 1);