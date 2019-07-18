import React, { Component } from 'react';
import { Form, Input, Button} from 'antd';
class PPForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ppObj: {
                // title:'',
                // description:'',
                // owner: ''
                title: props.ppObj.title||'',
                description: props.ppObj.description||'',
                owner: props.ppObj.owner||''
            }
        }
        console.log(props)
    }
   
    handleSubmitPP = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    cancelEdit=()=>{
        let {ppObj} = this.props
        this.props.form.setFieldsValue({
            title:ppObj.title,
            description:ppObj.description,
            owner:ppObj.owner
        })
    }
    onFieldsChange=(e)=>{
console.log(e)
    }
    render() {
        let { title,description,owner } = this.props.ppObj
        const { getFieldDecorator } = this.props.form;
        let { action } = this.props
        console.log(this.props)
        return (<div>
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitPP}>
                <Form.Item label="Tilte">
                    {getFieldDecorator('title', {
                        initialValue: title,
                        rules: [{ required: true, message: 'Please input your title!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>
                <Form.Item label="Description">
                    {getFieldDecorator('description', {
                        initialValue: description,
                        rules: [{ required: true, message: 'Please input your description!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>
                <Form.Item label="Owner">
                    {getFieldDecorator('owner', {
                        initialValue: owner,
                        rules: [{ required: true, message: 'Please input your owner!' }],
                    })(<Input autoComplete="off" />)}
                </Form.Item>

                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit" >
                        {action==='create' ? 'Create' : action==='edit'?'Save':'View'}
                    </Button>
                    {action==='edit' &&
                    <Button type="primary" style={{marginLeft:'1rem'}} onClick={this.cancelEdit}>
                      Cancel
                    </Button>
               }
                </Form.Item>
                

            </Form>
        </div>);
    }
}
const PP = Form.create({ name: 'PP' })(PPForm);
export default  PP 
