import React, { Component } from "react";
import './Button.css';

class Button extends Component {
    componentWillUnmount() {

    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <input type="button" className="hummmmmm-button" value={this.props.value} onClick={this.props.onClick} />
            </div>
        );
    }
}

export default Button;