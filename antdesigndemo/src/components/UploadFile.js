import React, { Component } from 'react';
import { Upload, Button, Icon, message } from 'antd';
// import reqwest from 'reqwest';
import UploadCustom from './uploadCustom';
import axios from 'axios'
class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
                fileList: [],
                uploading: false,
           
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    handleUpload = () => {
       
        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        });

        this.setState({
            uploading: true,
        });
        // You can use any AJAX library you like
        axios({
            url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            method: 'post',
            processData: false,
            data: formData,
            success: () => {
                this.setState({
                    fileList: [],
                    uploading: false,
                });
                message.success('upload successfully.');
                
            },
            error: () => {
                this.setState({
                    uploading: false,
                });
                message.error('upload failed.');
            },
        });
        this.handleOk()
    };
    render() {
        const { uploading, fileList,visible} = this.state;
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
                        <Icon type="upload" /> Select File
              </Button>
                </Upload>
                {/* <Button
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={fileList.length === 0}
                    loading={uploading}
                    style={{ marginTop: 16 }}
                >
                    {uploading ? 'Uploading' : 'Start Upload'}
                </Button> */}
                <UploadCustom   handleUpload={this.handleUpload}   uploading={uploading} handleCancel={this.handleCancel}  visible={visible}></UploadCustom>
            </div>
        );
    }
}

export default UploadFile;