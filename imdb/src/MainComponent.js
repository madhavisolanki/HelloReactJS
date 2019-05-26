import React, { Component, Fragment } from 'react'
import getData from './api';
import  './Post.css';

class Post extends Component {
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
class PostListComponent extends Component {
    render(){
        let postContainer = [];
        if (this.props.posts != undefined) {
            this.props.posts.forEach((value,index) => {
                console.log('I am post from props', value.id);
                postContainer.push(<Post post={value} key={index} />);
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
class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postData: [],
        }
    }

    componentDidMount(){
        let postData = getData('https://jsonplaceholder.typicode.com/posts')
        postData.then((posts) => {
            this.setState({
                loading: false,
                postData: posts
            })
        });
        // let data = [
        // {
        //     "userId": 1,
        //     "id": 1,
        //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //     "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        // },
        // {
        //     "userId": 1,
        //     "id": 2,
        //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //     "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architect"
        // },
        // {
        //     "userId": 1,
        //     "id": 3,
        //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //     "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architect"
        // },];
        // this.setState({
        //     loading: false,
        //     postData: data
        // });
    }

    render() {
        return (
            <Fragment>
                {this.state.loading && <p>Loading..</p>}
                {!this.state.loading && <PostListComponent posts= {this.state.postData} />}
            </Fragment>
        );
    }
}

export default MainComponent;