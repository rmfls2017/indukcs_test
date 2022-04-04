import React, { Component } from "react";
import MyComponent from "./MyComponent";

class MyComponentApp extends Component {
    render() {
        return(
            <div className="body">
                <MyComponent name="임"/>
                <MyComponent name="복"/>
                <MyComponent name="출"/>
                <MyComponent name="교"/>
                <MyComponent name="수"/>
                <MyComponent name="님"/>
            </div>
        );
    }
}

export default MyComponentApp;