import React, { Component } from 'react';
import { Form, Button, message, Icon, Upload, Table,Input } from 'antd';
import UploadCustom from '../../../../components/files/UploadCustom';
// import DocumentList from '../../../../components/DocumentList';
// import axios from 'axios';
const ButtonGroup = Button.Group;
const data = [
  {
    key: '1',
    title: 'John Brown',
    filename: 'Jim',
    description: 'New York No. 1 Lake Park',
    comments: 'Nice developer',
  },
  {
    key: '2',
    title: 'Jim Green',
    filename: 'Mike',
    description: 'London No. 1 Lake Park',
    comments: 'Champion',
  },
  {
    key: '3',
    title: 'Joe Black',
    filename: 'Joe',
    description: 'Sidney No. 1 Lake Park',
    comments: 'Cool teacher',
  },
  {
    key: '4',
    title: 'John Brown',
    filename: 'Jim',
    description: 'New York No. 1 Lake Park',
    comments: 'Nice developer',
  },
  {
    key: '5',
    title: 'Jim Green',
    filename: 'Mike',
    description: 'London No. 1 Lake Park',
    comments: 'Champion',
  },
  {
    key: '6',
    title: 'Joe Black',
    filename: 'Joe',
    description: 'Sidney No. 1 Lake Park',
    comments: 'Cool teacher',
  },
];

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      console.log({ ...record,...values })
      handleSave({ ...record,values });
    });
  };

  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}





class Documents extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        // onClick={() => this.setRecord(row)}
        render: (text, row) => <u  style={{cursor:'pointer'}} >{text}</u>,
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'File Name',
        dataIndex: 'filename',
        key: 'filename',
      },
      {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
        editable: true,
      }
    ];
    this.state = {
      visible: false,
      fileList: [],
      recordObj: {
        title: ''
      },
      dataSource: [
        {
          key: '1',
          title: 'John Brown',
          filename: 'Jim',
          description: 'New York No. 1 Lake Park',
          comments: 'Nice developer',
        },
        {
          key: '2',
          title: 'Jim Green',
          filename: 'Mike',
          description: 'London No. 1 Lake Park',
          comments: 'Champion',
        },
        {
          key: '3',
          title: 'Joe Black',
          filename: 'Joe',
          description: 'Sidney No. 1 Lake Park',
          comments: 'Cool teacher',
        },
        {
          key: '4',
          title: 'John Brown',
          filename: 'Jim',
          description: 'New York No. 1 Lake Park',
          comments: 'Nice developer',
        },
        {
          key: '5',
          title: 'Jim Green',
          filename: 'Mike',
          description: 'London No. 1 Lake Park',
          comments: 'Champion',
        },
        {
          key: '6',
          title: 'Joe Black',
          filename: 'Joe',
          description: 'Sidney No. 1 Lake Park',
          comments: 'Cool teacher',
        },
      ]
    }
  }
  handleSave = row => {
    // console.log(row)
    const newData = [...this.state.dataSource];
    // console.log(newData)
    const index = newData.findIndex(item => row.key === item.key);
    // console.log(index)
    const item = newData[row.key-1]; //FIXME: Key cannot be less than 1
    // console.log(item)
    newData.splice(index, 1, {
      ...item,
      comments:row.values.comments
    });
    // by axios send change data to server
    this.setState({ dataSource: newData });
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
  }
  showModal = (action, e) => {
    let { recordObj } = this.state
    if (!recordObj.title) {
      message.warning('Please select one line first')
    } else {
      this.setState({
        visible: true,
        action: action
      });
    }
  };
  showUploadModal = () => {
    
      this.setState({
        visible: true,
      });
    

  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    const { fileList, visible, action, recordObj,dataSource } = this.state;
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
        this.showUploadModal()
        return false;
      },
      fileList,
    };
   
    return (<div>
      <Upload {...props}>
        <Button>
          <Icon type="upload" /> Upload Documents
              </Button>
      </Upload>
      <div style={{ marginTop: '0.4rem' }}>
        <div>
          <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#000', margin: '0.6rem 0', display: 'inline-block' }}>Documents List</span>
          <ButtonGroup style={{ float: 'right' }}>
            <Button type="primary" onClick={this.showModal.bind(this, 'edit')}>
              Edit
          <Icon type="edit" />
            </Button>
            <Button type="primary" onClick={this.showModal.bind(this, 'delete')}>
              Delete
          <Icon type="delete" />
            </Button>
            <Button type="primary" onClick={this.showModal.bind(this, 'download')}>
              Download
          <Icon type="download" />
            </Button>
          </ButtonGroup>
        </div>
        <Table size='small'
          components={components}
          bordered={true}
          rowClassName={(record)=>{
            return   record.key === this.state.rowId ? 'clickRowStyl editable-row' : '';
           }}
           onRow={(record, index) => {
               return {
                   onClick: () => {
                       this.setState({
                         rowId: record.key,
                         recordObj:record
                       });
                     },
               };
           }}
          style={{ background: '#fff' }} columns={columns} pagination={{ pageSize: 5 }} dataSource={dataSource} />
      </div>
      <UploadCustom record={recordObj} action={action} fileList={fileList} handleCancel={this.handleCancel} visible={visible} ></UploadCustom>
    </div>);
  }
}

export default Form.create({ name: 'documents' })(Documents);;