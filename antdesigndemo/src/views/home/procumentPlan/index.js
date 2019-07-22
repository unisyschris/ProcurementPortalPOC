import React, { Component } from 'react';
import {Tabs, Divider,message} from 'antd';
import StepperNoContent from '../../../components/StepperNoContent';
import ActivityList from './components/ActivityList';
import PP from './components/PP';
import PDS from './components/PDS';
import Documents from './components/Documents'
const { TabPane } = Tabs;
class ProcPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      lable: 'Submit',
      uploadUrl: '/',
      // https://www.mocky.io/v2/5cc8019d300000980a055e76,
      ppObj: {
        title: '',
        description: '',
        owner: ''
    }
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
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.state.recordObj&&nextProps.location.state.recordObj.title !== prevState.ppObj.title) {
      console.log(nextProps, prevState)
      return {
        ppObj: nextProps.location.state.recordObj,
      };
    }
    return null;
  }
 
  
 
  handleSubmitFile = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

 
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
    };
    return (<div style={{ backgroundColor: '#fff', padding: '0.4rem 1rem 2.4rem', height: 'auto' }}>
      <div style={{ width: '80%', margin: '12px auto' }}>
        <StepperNoContent></StepperNoContent>
      </div>
      <Divider></Divider>
      <Tabs tabPosition='left' style={{ position: 'relative', width: '100%' }}>
        <TabPane tab="PP" key="1">
            <PP ppObj={location.state.recordObj||{}} action={location.state.action||''}></PP>
        </TabPane>
        <TabPane tab="PDS" key="2">
          <PDS></PDS>
        </TabPane>
        <TabPane tab="Activities" key="3">
          <ActivityList></ActivityList>
        </TabPane>
        <TabPane tab="Documents" key="4">
          <Documents></Documents>
        </TabPane>
      </Tabs>
    </div>);
  }
}
export default ProcPlan;