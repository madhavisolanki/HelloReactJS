import React, {Component, Fragment} from 'react';

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        console.log('A name was submitted:'+ this.state.value);
        event.preventDefault();
    }

    handleChange(event){
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <Fragment>
                <p>Currently my value is {this.state.value}</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </Fragment>
        );
    }  
}

export default NameForm;