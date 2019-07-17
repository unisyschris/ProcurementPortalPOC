import React, { Component } from 'react';
import { Form, Input, Button,Tabs,message} from 'antd';
import UploadFile from '../../../../components/UploadFile'
const { TabPane } = Tabs;
const { TextArea } = Input;
class Documents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
      beforeUpload = (info) => {
        console.log(info, 'stop')
        return false;
      }
    render() { 
        const uploadProps = {
            name: 'file',
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            headers: {
              authorization: 'authorization-text',
            },
            beforeUpload: this.beforeUpload,
            onChange(info) {
              console.log(info)
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            }
          }
          let { uploadUrl } = this.state
          let { location } = this.props
          const { loading, isDisabled } = this.state;
          const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
          }
          const { getFieldDecorator } = this.props.form;
        return ( <div>
            <Form style={{ position: 'relative' }} {...formItemLayout} onSubmit={this.handleSubmitFile}>
            {/* <Form.Item label="Tilte">
              {getFieldDecorator('note', {
                rules: [{ required: true, message: 'Please input your title!' }],
              })(<Input disabled={isDisabled} autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('desc', {
                rules: [{ required: true, message: 'Please input your description!' }],
              })(<Input disabled={isDisabled} autoComplete="off" />)}
            </Form.Item> */}
            <Form.Item label="Upload" >
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <UploadFile></UploadFile>
                // <Upload   {...uploadProps}>
                //   <Button disabled={isDisabled}>
                //     <Icon type="upload" /> Click to upload
                //   </Button>
                // </Upload>
              )}
            </Form.Item>
            <Form.Item label="Comments" style={{ display: isDisabled === true ? 'block' : 'none' }}>
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }} >
              <Button type="primary" htmlType="submit">
              EDIT
              </Button>
            </Form.Item>
          </Form>
        </div> );
    }
}
 
export default Form.create({ name: 'documents' })(Documents);;