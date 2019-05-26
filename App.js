import React, {Component} from 'react';
import NavComponent from './components';

class App extends Component {
    render() {
        return (
            <NavComponent/>
        );
    }
}

class AnotherNavComponent extends NavComponent {
    render() {

    }
}