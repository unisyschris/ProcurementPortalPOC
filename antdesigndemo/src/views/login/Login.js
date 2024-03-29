import * as React from 'react';
import { Component } from 'react';
import WrappedNormalLoginForm from '../../components/LoginForm'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userName: 'hui' };
    }
    componentDidMount(){
        this.props.clearStore()
    }
    render() {
        // style={{ paddingTop: '0px', height: '100vh', backgroundImage: `url(./images/login-back.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
        return (<div style={{ paddingTop: '0px', height: '100vh', backgroundImage: 'url(./images/login-back.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className="login" >
                <WrappedNormalLoginForm ></WrappedNormalLoginForm>
            </div>
        </div>);
    }
}

export default Login;