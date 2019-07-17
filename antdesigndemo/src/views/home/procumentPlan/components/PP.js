import React, { Component } from 'react';
import { Form, Input, Button} from 'antd';
class PPForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ppObj: {
                title: props.ppObj.title||'',
                description: props.ppObj.description||'',
                owner: props.ppObj.description||''
            }
        }
        console.log(props)
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        // if (nextProps.ppObj.title !== prevState.ppObj.title) {
        //   console.log(nextProps, prevState)
        //   return {
        //     ppObj: nextProps.location.state,
        //   };
         
        // }
        return null;
      }
    handleSubmitPP = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
  
    render() {
        let { ppObj } = this.state
        const { getFieldDecorator } = this.props.form;
        let { action } = this.props
        console.log(action)
        return (<div>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitPP}>
                <Form.Item label="Tilte" >
                    {getFieldDecorator('tltle', {
                        initialValue: ppObj.title || '',
                        rules: [{ required: true, message: 'Please input your title!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>
                <Form.Item label="Description">
                    {getFieldDecorator('description', {
                        initialValue: ppObj.description || '',
                        rules: [{ required: true, message: 'Please input your description!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>
                <Form.Item label="Owner">
                    {getFieldDecorator('owner', {
                        initialValue: ppObj.owner || '',
                        rules: [{ required: true, message: 'Please input your owner!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit" >
                        {action==='create' ? 'Create' : action==='edit'?'Save':'View'}
                    </Button>
                </Form.Item>

            </Form>
        </div>);
    }
}
const PP = Form.create({ name: 'PP' })(PPForm);
export default  PP 
