import React, { Component } from 'react';
import { Table, Button, Icon, message } from 'antd';

const ButtonGroup = Button.Group;

const data = [
    {
        key: '1',
        title: 'John Brown',
        filename: 'Jim',
        description: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        title: 'Jim Green',
        filename: 'Mike',
        description: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        title: 'Joe Black',
        filename: 'Joe',
        description: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        title: 'John Brown',
        filename: 'Jim',
        description: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '5',
        title: 'Jim Green',
        filename: 'Mike',
        description: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        title: 'Joe Black',
        filename: 'Joe',
        description: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordObj: {
                title: ''
            }
        }
    }
    toProcumentPlan = (record) => {
        console.log(record)

    }
    // setRecord = (record) => {
    //     console.log(record)
    //     this.setState({
    //         recordObj: record
    //     })
    // }
    showModal = (action, e) => {
        let { recordObj } = this.state
        console.log(recordObj.title, action)
        if (!recordObj.title) {
            message.warning('Please select one line first')
        } else {
            console.log(4)
            this.setState({
                visible: true,
                action: action
            });
        }

    };
    render() {
        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                render: (text, row) => <a href="javascript:;" onClick={() => this.setRecord(row)}>{text}</a>,
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
            }
        ];
        return (<div style={{marginTop:'0.4rem'}}>
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
          <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
            <Table size='small'
                bordered={true}
                style={{ background: '#fff' }} columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />
        </div>);
    }
}

export default DocumentList;