import React, { Component } from 'react';
import { Tabs, Divider, message } from 'antd';
import StepperNoContent from '../../../../components/StepperNoContent';
import ActivityList from '../components/ActivityList';
import PP from '../components/PP';
import PDS from '../components/PDS';
import Documents from '../components/Documents'
const { TabPane } = Tabs;
class ProcPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lable: 'Submit',
      ppObj: {
        key: '0',
        title: '',
        description: '',
        owner: ''
      },
      action: 'create'
    }
  }
  componentDidMount() {
    let { location } = this.props
    console.log(location)
    if (location.state) {
      console.log( { ...location.state.recordObj })
      this.setState({
        ppObj: { ...location.state.recordObj },
        action: location.state.action
      })
    }
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

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   let {recordObj} = nextProps.location.state
  //   console.log(recordObj.key === prevState.ppObj.key)
  //   if (recordObj && recordObj.key !== prevState.ppObj.key) {
  //     console.log(recordObj.key === prevState.ppObj.key)
  //     return {
  //       ppObj: {...recordObj},
  //     };
  //   }
  //   return null;
  // }

  handleSubmitFile = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };


  render() {
    let { ppObj, action } = this.state
    return (<div style={{ backgroundColor: '#fff', padding: '0.4rem 1rem 2.4rem', height: 'auto' }}>
      <div style={{ width: '80%', margin: '12px auto' }}>
        <StepperNoContent></StepperNoContent>
      </div>
      <Divider></Divider>
      <Tabs tabPosition='left' style={{ position: 'relative', width: '100%' }}>
        <TabPane tab="PP" key="1">
          <PP ppObj={ppObj} action={action}></PP>
        </TabPane>
        <TabPane tab="PDS" key="2">
          <PDS action={action}></PDS>
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