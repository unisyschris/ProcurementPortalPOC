import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  DatePicker, TimePicker, Input,message
} from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const uploadState = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text'
}
}
class FormDemoB extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      lable: 'Submit'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false }, () => {

      });
      // this.props.handleCancel()
    }, 2000);
    let { label } = this.state
    //  出发lable对应的action
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  UploadChange=(info)=> {
    console.log(info)
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
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
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const { loading, isDisabled } = this.state;
    // const { formLayout } = this.state;
    // const formItemLayout =
    //   formLayout === 'horizontal'
    //     ? {
    //         labelCol: { span: 4 },
    //         wrapperCol: { span: 14 },
    //       }
    //     : null;
    // const buttonItemLayout =
    //   formLayout === 'horizontal'
    //     ? {
    //         wrapperCol: { span: 14, offset: 4 },
    //       }
    //     : null;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    // const {} = this.props
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} >
       
        <Form.Item label="Plain Text" >
        <Input placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="Select" hasFeedback >
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country" disabled={isDisabled}>
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="DatePicker[showTime]">
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker disabled={isDisabled} showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>
        {/* <Form.Item label="InputNumber">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber disabled={isDisabled} min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item> */}
        <Form.Item label="Upload" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload {...uploadState} onChange={this.UploadChange} listType="picture">
              <Button disabled={isDisabled}>
                <Icon type="upload" /> Click to upload
                </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item label="Comments" style={{ display: isDisabled === true ? 'block' : 'none' }}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            {this.state.lable}
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedDemoB = Form.create({ name: 'validate_other' })(FormDemoB);
export default WrappedDemoB