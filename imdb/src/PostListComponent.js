import React, { Component, Fragment } from 'react'
import PostComponent from './PostComponent';

class PostListComponent extends Component {
    render(){
        let postContainer = [];
        if (this.props.posts != undefined) {
            this.props.posts.forEach((value,index) => {
                console.log('I am post from props', value.id);
                postContainer.push(<PostComponent post={value} key={index} />);
            });
        }
        console.log('I am post from props', this.props.posts);
        return (
            <Fragment>
                {postContainer}
            </Fragment>

        );
    }
}

export default PostListComponent;