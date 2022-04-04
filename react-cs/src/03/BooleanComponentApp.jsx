import React, { Component } from "react";
import BooleanComponent from "./BooleanComponent";

class BooleanComponentApp extends React.Component {
    render() {
        return(
            <div className="body">
                <BooleanComponent bored={true} />
                <BooleanComponent bored={false} />
            </div>
        );
    }
}

export default BooleanComponentApp;