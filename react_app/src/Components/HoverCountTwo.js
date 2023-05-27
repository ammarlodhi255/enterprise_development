import React from "react";

class HoverCountTwo extends React.Component {

    render() { 
        const { count, incrementCount } = this.props;
        return (
            <h2 onMouseOver={ incrementCount }>Hovered { count } times</h2>
        );
    }
}
 
export default HoverCountTwo;