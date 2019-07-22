import React, { Component } from 'react';
import { Steps, Button, message, Icon,Popover } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'PP and PDS',
    content: 'PP and PDS',
    index:0,
    icon:'user',
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
    
      next() {
        const current = this.state.current + 1;
        if(current===2){
            this.setState({ current,icon:''},()=>{
          
            });
        }
        this.setState({ current},()=>{
          
        });

      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
    render() { 
        const { current ,icon} = this.state;
        return ( <div>
          
            <Steps current={current} status="process">
              {steps.map((item,key)=> (
                  <Step key={item.title+key} icon={<Popover content={item.content} ><Icon type={item.icon} /> </Popover>}  title={item.title} />
              ))}
            </Steps>
           
            {/* <div className="steps-content">{steps[current].content}</div> */}
            {/* <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => this.next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              )}
            </div> */}
          </div> );
    }
}
 
export default StepperNoContent;