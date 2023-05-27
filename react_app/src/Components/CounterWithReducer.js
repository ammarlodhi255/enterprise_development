import React, { useReducer } from 'react';

const initialState = {
    count: 0
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterWithReducer = () => {  
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>Count: { state.count }</h1>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}
 
export default CounterWithReducer;
