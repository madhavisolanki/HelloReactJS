import React, { Component, Fragment } from 'react'

class LinkComponenent extends Component {
    render() {
        return (
            <a href={this.props.apiUrl}>{this.props.urlName}</a>
        );
    }
}

class SidebarComponent extends Component {
    render() {
        //let link = props.link;
        console.log(this.props)
        let linkContainer = [];
        if (this.props.urlList) {
            this.props.urlList.forEach((value,key) => {
                linkContainer.push(<li key={key}><LinkComponenent apiUrl= {value.apiUrl} urlName= {value.urlName}/></li>)
            });
        }
        return (
            <Fragment>
               <ul>
                   {linkContainer}
               </ul>
            </Fragment>
        );
    }
}


export default SidebarComponent;