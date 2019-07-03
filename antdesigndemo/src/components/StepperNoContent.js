import React, { Component } from 'react';
import { Steps, Button, message, Icon,Popover } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
    index:0,
    icon:'user',
    content : (
      <div>
        <p>Step1&nbsp;<Icon type='check' /></p>
        <p>Step2&nbsp;<Icon type='check' /></p>
      </div>
    )
  },
  {
    title: 'Second',
    content: 'Second-content',
    index:1,
    icon:'file',
    content : (
      <div>
        <p>Step1&nbsp;<Icon type='check' /></p>
        <p>Step2&nbsp;<Icon type='close' /></p>
      </div>
    )
  },
  {
    title: 'Third',
    content: 'Third-content',
    index:2,
    icon:'idcard',
    content : (
      <div>
        <p>Step1&nbsp;<Icon type='close' /></p>
        <p>Step2&nbsp;<Icon type='close' /></p>
      </div>
    )
  },
  {
    title: 'Fourth',
    content: 'Fourth-content',
    index:2,
    icon:'notification',
    content : (
      <div>
        <p>Step1&nbsp;<Icon type='close' /></p>
        <p>Step2&nbsp;<Icon type='close' /></p>
      </div>
    )
  },
 
  {
    title: 'Last',
    content: 'Last-content',
    index:2,
    icon:'rocket',
    content : (
      <div>
        <p>Step1&nbsp;<Icon type='close' /></p>
        <p>Step2&nbsp;<Icon type='close' /></p>
      </div>
    )
  },
];
const content = (
  <div>
    <p>Step1<Icon type='close' /></p>
    <p>Step2<Icon type='close' /></p>
  </div>
);
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
              {steps.map(item => (
                  <Step key={item.title} icon={<Popover content={item.content} ><Icon type={item.icon} /> </Popover>}  title={item.title} />
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