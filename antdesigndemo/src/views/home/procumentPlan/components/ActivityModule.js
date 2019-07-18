import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'antd';

class ActivityModule extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false
        };
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    handleSubmitActivity = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
    handleSubmitNew = () => {
        this.props.handleOk()
    }
    render() {
        const { ModalText, activityObj } = this.state;
        console.log(activityObj)
        const { visible, loading, handleOk, handleCancel, record, action } = this.props;
        console.log(record, action)
        const { getFieldDecorator } = this.props.form;
        return (<div>
            <Modal
                title="Activity Detail"
                visible={visible}
                width="80vw"
                onCancel={handleCancel}
                // footer={[
                //     <Button key="back" onClick={handleCancel}>
                //       Return
                //     </Button>,
                //     <Button key="submit" type="primary" loading={loading} onClick={this.handleSubmitNew}>
                //       Submit
                //     </Button>,
                //   ]}
                footer={null}
            >
                <Form className="pds-part" labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitActivity}>
                    <Form.Item label="Package No">
                        {getFieldDecorator('packageNo', {
                            initialValue: record.packageNo,
                            // rules: [{ required: true, message: 'Please input your strategic assessment!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="General Description">
                        {getFieldDecorator('description', {
                            initialValue: record.description,
                            rules: [{ required: true, message: 'Please input your  market research!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="Unit">
                        {getFieldDecorator('unit', {
                            initialValue: record.unit,
                            rules: [{ required: true, message: 'Please input your  risk management!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="Quantity">
                        {getFieldDecorator('quantity', {
                            initialValue: record.quantity,
                            rules: [{ required: true, message: 'Please input your operational factors impacting on procurement!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="Review Type">
                        {getFieldDecorator('type', {
                            initialValue: record.type,
                            rules: [{ required: true, message: 'Please input your Procurement Arrangements!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="Method">
                        {getFieldDecorator('method', {
                            initialValue: record.method,
                            rules: [{ required: true, message: 'Please input your Procurement Plan!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item label="Estimated value">
                        {getFieldDecorator('value', {
                            initialValue: record.value,
                            rules: [{ required: true, message: 'Please input your Procurement Plan!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
                        <Button type="primary" htmlType="submit" >
                            {action === 'create' ? 'Create' : action === 'edit' ? 'Save' : action === 'delelte' ? 'Delete' : 'View'}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>);
    }
}

export default Form.create({ name: 'ActivityModule' })(ActivityModule);