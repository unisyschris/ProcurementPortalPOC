import React, { Component } from 'react';
import {
  Tabs, Select, Form, Input, Button, Divider, InputNumber,
  Switch,
  Radio,
  Slider,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  message
} from 'antd';
import UploadFile from '../../../components/UploadFile'
import StepperNoContent from '../../../components/StepperNoContent';
import ActivityList from '../../../components/ActivityList';
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;
class ProcPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      lable: 'Submit',
      uploadUrl: '/'
      // https://www.mocky.io/v2/5cc8019d300000980a055e76
    }
  }
  componentDidMount() {
    let role = localStorage.getItem('role')
    if (role === 'admin') {
      this.setState({
        lable: 'Approval',
        isDisabled: true
      })
    } else {
      this.setState({
        isDisabled: false,
        lable: 'Submit',
      })
    }

  }
  handleSubmitPP = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleSubmitPDS = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  handleSubmitFile = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  beforeUpload=(info)=>{
    console.log(info,'stop')
    return false;
  }
  render() {
    const uploadProps = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      beforeUpload:this.beforeUpload,
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
    console.log(this.props.location.state)
    let { location } = this.props
    const { loading, isDisabled } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { getFieldDecorator } = this.props.form;
    return (<div style={{ backgroundColor: '#fff', padding: '20px 20px 36px', height: 'auto' }}>
      <h2>Stepper</h2>
      <div style={{ width: '80%', margin: '20px auto 30px' }}>
        <StepperNoContent></StepperNoContent>

      </div>
      <Divider></Divider>
      <h2>Form</h2>
      <Tabs tabPosition='left' style={{ position: 'relative', width: '100%' }}>
        <TabPane tab="PP" key="1">
          <div >
            <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitPP}>

              <Form.Item label="Tilte">
                {getFieldDecorator('note', {
                  rules: [{ required: true, message: 'Please input your title!' }],
                })(<Input autoComplete="off" />)}
              </Form.Item>
              <Form.Item label="Description">
                {getFieldDecorator('desc', {
                  rules: [{ required: true, message: 'Please input your description!' }],
                })(<Input autoComplete="off" />)}
              </Form.Item>
              <Form.Item label="Owner">
                {getFieldDecorator('owner', {
                  rules: [{ required: true, message: 'Please input your owner!' }],
                })(<Input autoComplete="off" />)}
              </Form.Item>

              <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                <Button type="primary" htmlType="submit" >
                  {location.state ? 'Edit' : 'Create'}
                </Button>
              </Form.Item>

            </Form>
          </div>
        </TabPane>
        <TabPane tab="PDS" key="2">
          <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmitPDS}>

            <Form.Item label="Strategic Assessment">
              {getFieldDecorator('assessment', {
                rules: [{ required: true, message: 'Please input your strategic assessment!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Factors Impacting">
              {getFieldDecorator('factors', {
                rules: [{ required: true, message: 'Please input your operational factors impacting on procurement!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Market Research">
              {getFieldDecorator('research', {
                rules: [{ required: true, message: 'Please input your  market research!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Risk Management">
              {getFieldDecorator('risk', {
                rules: [{ required: true, message: 'Please input your  risk management!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Procurement Arrangements">
              {getFieldDecorator('research', {
                rules: [{ required: true, message: 'Please input your Procurement Arrangements!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Procurement Plan">
              {getFieldDecorator('research', {
                rules: [{ required: true, message: 'Please input your Procurement Plan!' }],
              })(<Input autoComplete="off" />)}
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 5 }} >
              <Button type="primary" htmlType="submit" >
                {location.state ? 'Edit' : 'Create'}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Activities" key="3">
          <ActivityList></ActivityList>
        </TabPane>
        <TabPane tab="Documents" key="4">
          <Form style={{ position: 'relative' }} {...formItemLayout} onSubmit={this.handleSubmitFile}>
            <Form.Item label="Tilte">
              {getFieldDecorator('note', {
                rules: [{ required: true, message: 'Please input your title!' }],
              })(<Input disabled={isDisabled} autoComplete="off" />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('desc', {
                rules: [{ required: true, message: 'Please input your description!' }],
              })(<Input disabled={isDisabled} autoComplete="off" />)}
            </Form.Item>
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
                {location.state ? 'Edit' : 'Create'}
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>);
  }
}
const ProcumentPlan = Form.create({ name: 'coordinated' })(ProcPlan);
export default ProcumentPlan;