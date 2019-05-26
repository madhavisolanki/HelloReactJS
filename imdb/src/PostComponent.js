import React, { Component, Fragment } from 'react'
import  './Post.css';

class PostComponent extends Component {
    render(){
        return(
            <div className="postContainer">
            <ul>
                <li>{this.props.post.title}</li>
                <li>{this.props.post.id}</li>
                <li>{this.props.post.userId}</li>
                <li>{this.props.post.body}</li>
            </ul>
            </div>
        );
    }
}

export default PostComponent;