import React, { Component } from 'react';
import { Steps, Button, message, Icon,Popover } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'PP and PDS',
    content: 'PP and PDS',
    index:0,
    icon:'user',
    status:'success',
    content : (
      <div>
        <p>PP&nbsp;<Icon type='check' /></p>
        <div>PDS&nbsp;<Icon type='check' /></div>
      </div>
    )
  },
  {
    title: 'Review',
    content: 'Review',
    index:1,
    icon:'file',
    status:'success',
    content : (
      <div>
        <div>Review&nbsp;<Icon type='check' /></div>
      </div>
    )
  },
  {
    title: 'Create-activity',
    content: 'Create-activity',
    index:2,
    icon:'idcard',
    status:'unComplete',
    content : (
      <div>
        <div>Create-activity&nbsp;<Icon type='close' /></div>
      </div>
    )
  },
  {
    title: 'Review',
    content: 'Review',
    index:3,
    icon:'notification',
    status:'unComplete',
    content : (
      <div>
        <div>Review&nbsp;<Icon type='close' /></div>
      </div>
    )
  }
];

class StepperNoContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current: 1,
          icon:<Icon type="loading" />
        };
      }
    render() { 
        const {current} = this.state;
        return ( <div>
            <Steps current={current} status="process">
              {steps.map((item,key)=> (
                // <Icon type={item.icon} /> 
                  <Step  key={item.title+key} icon={<Popover content={item.content} ><Icon style={{color:item.status==='success'?'#1890ff':''}} type='info-circle' /> </Popover>}  title={item.title} />
              ))}
            </Steps>
          </div> );
    }
}
 
export default StepperNoContent;