import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ChildComponentApp extends React.Component {
    render() {
        return(
            <div>
                <ChildComponent
                    boolValue={true} 
                    numValue={123} 
                    arrayValue={[1, 2, 3]} 
                    objValue = {{name: '제목', age:30}} 
                    nodeValue={<h1>노드</h1>}
                    funcValue={ () => console.log("Hello") }
                />
            </div>
        );
    }
}

export default ChildComponentApp;