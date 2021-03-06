import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
class PDS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pdsObj: {
        assessment: '',
        factors:'',
        research:'',
        risk:'', 
        arrangements:'',
        plan:''
      }
    }
  }
  handleSubmitPDS = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    let { action } = this.props
    const { getFieldDecorator } = this.props.form;
    let { pdsObj } = this.state
    let { assessment,factors,research,risk, arrangements,plan} = pdsObj
    return (<div>
      <Form className="pds-part" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitPDS}>
        <Form.Item label="Strategic Assessment">
          {getFieldDecorator('assessment', {
            initialValue: assessment,
            // rules: [{ required: true, message: 'Please input your strategic assessment!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item label="Factors Impacting">
          {getFieldDecorator('factors', {
            initialValue: factors,
            rules: [{ required: true, message: 'Please input your operational factors impacting on procurement!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item label="Market Research">
          {getFieldDecorator('research', {
             initialValue: research,
            rules: [{ required: true, message: 'Please input your  market research!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item label="Risk Management">
          {getFieldDecorator('risk', {
             initialValue: risk,
            rules: [{ required: true, message: 'Please input your  risk management!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item label="Procurement Arrangements">
          {getFieldDecorator('arrangements', {
             initialValue: arrangements,
            rules: [{ required: true, message: 'Please input your Procurement Arrangements!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item label="Procurement Plan">
          {getFieldDecorator('plan', {
             initialValue: plan,
            rules: [{ required: true, message: 'Please input your Procurement Plan!' }],
          })(<Input autoComplete="off" />)}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
          <Button type="primary" htmlType="submit" >
            {action === 'create' ? 'Create' : action === 'edit' ? 'Save' : 'View'}
          </Button>
          {action === 'edit' &&
            <Button type="primary" style={{ marginLeft: '1rem' }} onClick={this.cancelEdit}>
              Cancel
                    </Button>
          }
        </Form.Item>
      </Form>
    </div>);
  }
}

export default Form.create({ name: 'PDS' })(PDS);