import React, { Component } from 'react';
import Dashboard from '../../../components/Dashboard'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <Dashboard></Dashboard>
        </div>);
    }
}

export default Home;