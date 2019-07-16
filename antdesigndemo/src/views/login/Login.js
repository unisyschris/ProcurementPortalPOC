import * as React from 'react';
import { Component } from 'react';
import WrappedNormalLoginForm from '../../components/LoginForm'
class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { userName: 'hui' };
    }
    render() {
        // style={{ paddingTop: '0px', height: '100vh', backgroundImage: `url(./images/blue2.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        return (<div className="login">
            <WrappedNormalLoginForm ></WrappedNormalLoginForm>
        </div>);
    }
}

export default Login;