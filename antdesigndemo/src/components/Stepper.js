import React, { Component } from 'react';
import { Steps, Button, message, Icon, Row, Col } from 'antd';

const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
    index: 0
  },
  {
    title: 'Second',
    content: 'Second-content',
    index: 1
  },
  {
    title: 'Last',
    content: 'Last-content',
    index: 2
  },
];
class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      icon: <Icon type="loading" />
    };
  }

  next() {
    const current = this.state.current + 1;
    if (current === 2) {
      this.setState({ current, icon: '' }, () => {

      });
    }
    this.setState({ current }, () => {

    });

  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current, icon } = this.state;
    return (<div>
      <Steps current={current} status="process">
        {steps.map(item => (
          //  icon={item.index === current ? icon : ''}  loading
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">
        {/* <h4>
            {steps[current].content}
            </h4> */}
        <div className="stepper">
          <span className="stepper-title">
            {steps[current].content}
          </span>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div className="stepper-detail"><span>Step1 </span><Icon type="check" /></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="stepper-detail"><span>Step2</span> <Icon type="check" /></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="stepper-detail"><span>Step3</span> <Icon type="check" /></div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div className="stepper-detail"><span>Step4 </span><Icon type="check" /></div>
            </Col>
          </Row>

          {/* <div className="stepper-detail"><span>Step2 <Icon type="check" /></span></div>
          <div className="stepper-detail"><span>Step3 <Icon type="check" /></span></div>
          <div className="stepper-detail"><span>Step4 <Icon type="close" /></span></div> */}
        </div>
      </div>
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
    </div>);
  }
}

export default Stepper;