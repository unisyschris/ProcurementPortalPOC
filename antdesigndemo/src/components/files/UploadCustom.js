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
                title: '',
                comments:''
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
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        // console.log(recordObj.key === prevState.ppObj.key)
        if (nextProps.fileList[nextProps.fileList.length-1] && nextProps.fileList !== prevState.fileList) {
            console.log(nextProps.fileList !== prevState.fileList)
            return {
                fileObj: { 
                description: '',
                title: '',
                comments:'', 
                filename: nextProps.fileList[nextProps.fileList.length-1].name
             },
                fileList: nextProps.fileList,
                uploading:false
            };
        }
        if (nextProps.record && nextProps.record !== prevState.fileObj) {
            console.log(nextProps.record)
            return {
                fileObj: { ...nextProps.record },
                action: nextProps.action,
                uploading:false
            };
        }
        return null;
    }
    handleUpload = e => {
        e.preventDefault();
        let { action } = this.props

        this.setState({
            uploading: true,
        },()=>{
            this.props.handleCancel()
        });
        
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
        console.log('cancel')
        this.props.handleCancel()
        // let { filename } = this.state.fileObj
        // this.props.form.setFieldsValue({
        //     title: '',
        //     description: '',
        //     filename: '',
        //     comments:''
        // },()=>{
            
        // })
       
    }
    // fileNameChange = (e) => {
    //     console.log(e.target, e.target.value)
    //     let val = e.target.value
    //     this.setState({
    //         fileName: val
    //     }, () => {
    //         this.props.changeFileNameP(val)
    //     })
    // }
    render() {
        const { getFieldDecorator } = this.props.form;
        let { visible, action } = this.props;
        let { uploading, fileObj } = this.state;
        let { filename, title, description,comments } = fileObj;
        console.log(this.state.fileObj)
        return (<div>
            <Modal
                title="Custom Upload"
                visible={visible}
                onCancel={this.handleCancel}
                footer={null}
                width={800}
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
                    <Form.Item label="Comments">
                        {getFieldDecorator('comments', {
                            initialValue: comments,
                            rules: [{ required: true, message: 'Please input your comments!' }],
                        })(<Input autoComplete="off" />)}
                    </Form.Item>
                    <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                        {
                            action ?
                                <Button type="primary" key="action" style={{ marginLeft: '1rem' }} loading={uploading} htmlType="submit">
                                    Save
                          </Button> :
                                <Button type="primary" htmlType="submit" loading={uploading}>
                                    {uploading ? 'Uploading' : 'Start Upload'}
                                </Button>
                        }
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