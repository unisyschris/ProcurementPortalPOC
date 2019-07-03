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
// onChange(info) {
//   console.log(info)
//   if (info.file.status !== 'uploading') {
//     console.log(info.file, info.fileList);
//   }
//   if (info.file.status === 'done') {
//     message.success(`${info.file.name} file uploaded successfully`);
//   } else if (info.file.status === 'error') {
//     message.error(`${info.file.name} file upload failed.`);
//   }
// }
}
class Demo extends React.Component {
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
  
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} >
        <Form.Item label="Plain Text" >
          <span className="ant-form-text">China</span>
        </Form.Item>
        <Form.Item label="Plain" >
        <Input disabled={isDisabled} placeholder="Basic usage" />
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input disabled={isDisabled} />)}
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
        
        <Form.Item label="Select[multiple]">
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select disabled={isDisabled} mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item label="DatePicker[showTime]">
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker disabled={isDisabled} showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>
        <Form.Item label="InputNumber">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber disabled={isDisabled} min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item>

        {/* <Form.Item label="Switch">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch disabled={isDisabled} />)}
        </Form.Item> */}
        <Form.Item label="Radio.Group">
          {getFieldDecorator('radio-group')(
            <Radio.Group disabled={isDisabled}>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Checkbox.Group">
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B'],
          })(
            <Checkbox.Group disabled={isDisabled} style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A" >A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">
                    B
                    </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
        </Form.Item>

        {/* <Form.Item label="Dragger" >
          <div className="dropbox ant-col-12">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>,
            )}
          </div>
        </Form.Item> */}

        <Form.Item label="Upload" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload listType="picture" {...uploadState} onChange={this.UploadChange}>
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
const WrappedDemo = Form.create({ name: 'validate_other' })(Demo);
export default WrappedDemo