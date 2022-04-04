import React, { Component } from "react";

class MyComponent extends Component {
    render () {
        const name = this.props.name;
        return (
            <div>
                <span>{name} #1</span><br/>
                <span>{name} #2</span>
            </div>
        );
    }
    
}

export default MyComponent;