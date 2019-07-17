import React, { Component } from 'react';
import { Modal, Button, Select, Form, Input } from 'antd';
const { Option } = Select;
class uploadCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            fileName: ''
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        let { fileList } = nextProps
        console.log(fileList)
        if (fileList.length > 0) {
            console.log(fileList[0].name)
            this.setState({
                fileName: fileList[0].name
            })
        }

    }
    fileNameChange = (e) => {
        console.log(e.target,e.target.value)
        let val= e.target.value
        this.setState({
            fileName:val
        },()=>{
            this.props.changeFileNameP(val)
        })
    }
    render() {
        let { handleUpload, visible, handleCancel, uploading, fileList } = this.props
        const { getFieldDecorator } = this.props.form;
        let { fileName } = this.state
        return (<div>

            <Modal
                title="Custom Upload"
                visible={visible}
                // onOk={handleUpload}
                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={uploading} onClick={handleUpload}>
                        {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>,
                ]}
            // footer={null}
            >
                <Input size="large" placeholder="large size" value={fileName} onChange={this.fileNameChange} />
                {/* <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleUpload}>
                    <Form.Item label="Note">
                        {getFieldDecorator('note', {
                            rules: [{ required: true, message: 'Please input your note!' }],
                        })(<Input />)}
                    </Form.Item>
                   
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        <Button type="primary" htmlType="submit" loading={uploading}>
                        {uploading ? 'Uploading' : 'Start Upload'}
                        </Button>
                    </Form.Item>
                </Form> */}


            </Modal>
        </div>);
    }
}

export default Form.create({ name: 'coordinated' })(uploadCustom);