import React, { Component } from 'react';
import { Modal, Button, Select, Form, Input, message } from 'antd';
import axios from 'axios'
const { Option } = Select;
class uploadCustom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            fileObj: {
                filename: '',
                description: '',
                title: ''
            },
            uploading: false,
            fileList: []

        }
    }
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    // handleSubmit = e => {
    //     e.preventDefault();
    //     let { action } = this.props
    //     if (action) {
    //         console.log('other operation')
    //     } else {
    //         this.props.form.validateFields((err, values) => {
    //             if (!err) {
    //                 console.log('Received values of form: ', values);
    //             }
    //         });
    //     }

    // };
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        // console.log(recordObj.key === prevState.ppObj.key)
        if (nextProps.fileList[0] && nextProps.fileList !== prevState.fileList) {
            console.log(nextProps.fileList === prevState.fileList)
            return {
                fileObj: { ...prevState.fileObj, fileName: nextProps.fileList[0].name },
                fileList: nextProps.fileList
            };
        }
        if (nextProps.record && nextProps.record !== prevState.fileObj) {
            console.log(nextProps.record)
            return {
                fileObj: { ...nextProps.record },
                action: nextProps.action
            };
        }
        return null;
    }
    handleUpload = e => {
        e.preventDefault();
        let { action } = this.props
        if (action) {
            console.log('other operation')
        } else {


            const { fileObj, fileList } = this.state;
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    const formData = new FormData();
                    fileList.forEach(file => {
                        console.log(file)
                        formData.append('files[]', file);
                    })
                    for (var key in values) {
                        formData.append(key, values[key]);
                    }
                    this.setState({
                        uploading: true,
                    });
                    //upload file to server
                    // axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData)
                    //     .then(res => {
                    //         console.log(res)
                    //         if (res) {
                    //             this.setState({
                    //                 fileList: [],
                    //                 uploading: false,
                    //                 visible: false,
                    //             });
                    //             message.success('upload successfully.');
                    //         }
                    //     })
                    //     .catch(err => {
                    //         if (err) {
                    //             this.setState({
                    //                 uploading: false,
                    //             });
                    //             message.error('upload failed.');
                    //         }
                    //     })
                }
            });
        };
    }
    handleCancel = () => {
        let { fileName } = this.state.fileObj
        this.props.form.setFieldsValue({
            title: '',
            description: '',
            fileName: fileName
        })
        this.props.handleCancel()
    }
    fileNameChange = (e) => {
        console.log(e.target, e.target.value)
        let val = e.target.value
        this.setState({
            fileName: val
        }, () => {
            this.props.changeFileNameP(val)
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { visible, handleCancel, action } = this.props;
        let { uploading, fileObj } = this.state;
        let { filename, title, description } = fileObj;
        console.log(action)
        return (<div>

            <Modal
                title="Custom Upload"
                visible={visible}
                onCancel={handleCancel}
                footer={null}
            // TODO: Custom upload Modal 
            >
                <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleUpload}>
                    <Form.Item label="File Name">
                        {getFieldDecorator('fileName', {
                            initialValue: filename,
                            // rules: [{ required: true, message: 'Please input your note!' }],
                        })(<Input />)}
                    </Form.Item>
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
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        {
                            action ?
                                <Button key="action" style={{ marginLeft: '1rem' }} htmlType="submit">
                                    Save
                          </Button> :
                                <Button type="primary" htmlType="submit" loading={uploading}>
                                    {uploading ? 'Uploading' : 'Start Upload'}
                                </Button>
                        }
                        {/* <Button type="primary" htmlType="submit" loading={uploading}>
                            {uploading ? 'Uploading' : 'Start Upload'}
                        </Button> */}
                        <Button key="back" style={{ marginLeft: '1rem' }} onClick={this.handleCancel}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>


            </Modal>
        </div>);
    }
}

export default Form.create({ name: 'coordinated' })(uploadCustom);