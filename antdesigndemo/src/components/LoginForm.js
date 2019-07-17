import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {history } from '../utils/history'
class NormalLoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }
  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
    let {username} = this.state
    if(username){
        username==='admin' ?  localStorage.setItem('role','admin'):localStorage.setItem('role','user')
        history.push(`${process.env.PUBLIC_URL}/`)
    }
  
  };
  FromChange=(e)=>{
        let name = e.target.name
        let value = e.target.value
        this.setState({
           [name]:value
        })
  }
  render() {
      let {username,password} = this.state
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <div className="login-logo">AIIB</div>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              setfieldsvalue={username}
              name="username"
              autoComplete="off"
              size="large"
              onChange={this.FromChange}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input autosize="true"
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              setfieldsvalue={password}
              name="password"
              size="large"
              onChange={this.FromChange}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          {/* <a className="login-form-forgot" href="">
            Forgot password
          </a> */}
          <Button   size="large" type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm