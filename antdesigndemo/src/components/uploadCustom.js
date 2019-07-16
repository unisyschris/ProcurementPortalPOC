import React, { Component } from 'react';
import { Modal, Button } from 'antd';
class uploadCustom extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    render() {
        let { handleUpload,visible,handleOk,handleCancel,uploading} = this.props
        return (<div>
          
            <Modal
                title="Custom Upload"
                visible={visible}
                // onOk={handleUpload}
                // onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                      Return
                    </Button>,
                    <Button key="submit" type="primary" loading={uploading} onClick={handleUpload}>
                     {uploading ? 'Uploading' : 'Start Upload'}
                    </Button>,
                  ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>);
    }
}

export default uploadCustom;