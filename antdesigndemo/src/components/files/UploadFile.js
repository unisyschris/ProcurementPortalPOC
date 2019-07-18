import React, { Component } from 'react';
import { Upload, Button, Icon, message } from 'antd';

import UploadCustom from './UploadCustom';
import axios from 'axios'
class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            fileList: [],

        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const {  fileList, visible } = this.state;
        const props = {
            onRemove: file => {
                this.setState(state => {
                    const index = state.fileList.indexOf(file);
                    const newFileList = state.fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(state => ({
                    fileList: [...state.fileList, file],
                }));
                console.log(file)
                this.showModal()
                return false;
            },
            fileList,
        };
        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Upload Documents
              </Button>
                </Upload>
                <UploadCustom fileList={fileList}  handleCancel={this.handleCancel} visible={visible} ></UploadCustom>
            </div>
        );
    }
}

export default UploadFile;