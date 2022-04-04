import React, { Componenet } from "react";
import PropsComponent from "./PropsComponent";

class PropsComponentApp extends React.Component {
    render() {
        return (
            <div className="body">
                <PropsComponent 
                    name='Lee JeongMin'
                />
            </div>
        );
    }
}

export default PropsComponentApp;