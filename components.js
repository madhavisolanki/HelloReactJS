//Eslint
import React, {Component } from 'react';

class Logo extends Component {
    render(){
        return (
            <img src={this.props.Url}/>
        );
    }
}

//to import in other componenets file
export default class NavComponent extends Component{
    render(){
        return (
           <div>
              <Logo Url={imgUrl}/>
              <SearchBox />
              <Link1 />
              <Link2 />
           </div>
        );
    }
}