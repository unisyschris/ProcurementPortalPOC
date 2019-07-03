import React from 'react';
import { Modal, Button } from 'antd';
import WrappedDemo from './FormDemo'
class Dialog extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        loading: false,
        visible: false,
      };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal 
        </Button>
        <Modal
        width="60vw"
          visible={visible}
          title="Form List"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null
        //     [ <Button key="back" onClick={this.handleCancel}>
        //       Return
        //     </Button>,
        //     <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
        //       Submit
        //     </Button>,
        //   ]
        }
        >
        <WrappedDemo handleCancel={this.handleCancel}></WrappedDemo>
        </Modal>
      </div>
    );
  }
}
export default Dialog