import React, { Component, Fragment } from 'react'
import LinkComponenent from './LinkComponent'

class SidebarComponent extends Component {
    render() {
        //let link = props.link;
        console.log(this.props)
        let linkContainer = [];
        if (this.props.urlList) {
            this.props.urlList.forEach((value,key) => {
                linkContainer.push(<li key={key}><LinkComponenent apiUrl= {value.apiUrl} urlName= {value.urlName} color= {value.color}/></li>)
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