import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';

class LinkComponenent extends Component {
    constructor(props){
        super(props);
        this.state = {
            visited: false
        }

        this.gotClicked = this.gotClicked.bind(this);
        this.gotPointer = this.gotPointer.bind(this);
    }

    gotClicked(event) {
        event.preventDefault();
        console.log("I am an event");
        console.log(event);
        console.log(event.target);
        if(this.state.visited){
            this.setState({visited: false});
        }else{
            this.setState({visited: true});
        }
    }

    gotPointer(event){
        console.log("I am moving pointer");
        console.log(event);
        console.log(event.target);
    }
    componentDidMount() {
        console.log("I am mounted");
    }

    render() {
        let linkColor = this.props.color;
        let visitedColor = this.state.visited ? 'red': 'green';
        const linkStyle = {
            color:visitedColor,
            fontWeight: 700,
            fontSize: "40px"
        };
        return (
            <a onPointerMove={this.gotPointer}onClick={this.gotClicked}href={this.props.apiUrl} style={linkStyle}>{this.props.urlName} </a>
        );
    }
}
LinkComponenent.propTypes = {
    urlName: PropTypes.string,
    apiUrl: PropTypes.string,
    color: PropTypes.string
}

export default LinkComponenent;
