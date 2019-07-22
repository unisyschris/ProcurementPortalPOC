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

        this.setState({
            visible: false,
        });
    };
    changeFileNameP = (name) => {
        let  fileList = this.state.fileList;
     
        if(name){
            console.log(fileList[0])
            // fileList[0].name=name
          
        //    this.setState({
        //     fileList:fileList
        //    },()=>{
        //        console.log(this.state.fileList)
        //    })
        }
    }
    handleUpload = () => {

        const { fileList } = this.state;
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('files[]', file);
        })
        this.setState({
            uploading: true,
        });
        axios.post('https://www.mocky.io/v2/5cc8019d300000980a055e76', formData)
            .then(res => {
                console.log(res)
                if (res) {
                    this.setState({
                        fileList: [],
                        uploading: false,
                        visible: false,
                    });
                    message.success('upload successfully.');
                }
            })
            .catch(err => {
                if (err) {
                    this.setState({
                        uploading: false,
                    });
                    message.error('upload failed.');
                }
            })

    };
    render() {
        const { uploading, fileList, visible } = this.state;
        // const props2 = {
        //     name: 'file',
        //     action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        //     headers: {
        //         authorization: 'authorization-text',
        //     },
        //     onChange(info) {
        //         if (info.file.status !== 'uploading') {
        //             console.log(info.file, info.fileList);
        //         }
        //         if (info.file.status === 'done') {
        //             message.success(`${info.file.name} file uploaded successfully`);
        //         } else if (info.file.status === 'error') {
        //             message.error(`${info.file.name} file upload failed.`);
        //         }
        //     },
        // };
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
                <UploadCustom handleUpload={this.handleUpload} fileList={fileList} uploading={uploading} handleCancel={this.handleCancel} visible={visible} changeFileNameP={this.changeFileNameP}></UploadCustom>

                {/* <Upload {...props2}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload> */}
            </div>
        );
    }
}

export default UploadFile;