import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

class LinkComponenent extends Component {
    render() {
        let linkColor = this.props.color;
        const linkStyle = {
            color:linkColor,
            fontWeight: 700,
            fontSize: "40px"
        };
        return (
            <a href={this.props.apiUrl} style={linkStyle}>{this.props.urlName} </a>
        );
    }
}
LinkComponenent.propTypes = {
    urlName: PropTypes.number,
    apiUrl: PropTypes.string,
    color: PropTypes.string
}

export default LinkComponenent;
