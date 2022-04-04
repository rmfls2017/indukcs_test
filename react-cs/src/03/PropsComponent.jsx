import React, { Component } from "react";
import PropTypes from 'prop-types';

class PropsComponent extends React.Component {
    render() {
        const name = this.props.name;
        return(
            <span>Name: {name}</span>
        );
    }
}

PropsComponent.propTypes = {
    name: PropTypes.string,
};

export default PropsComponent;