import React, { Component } from 'react';
import { Table, Button, Icon, message } from 'antd';
import { history } from '../utils/history'

const ButtonGroup = Button.Group;
const data = [
    {
        key: '1',
        title: 'John Brown',
        owner: 'Jim',
        description: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        title: 'Jim Green',
        owner: 'Mike',
        description: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        title: 'Joe Black',
        owner: 'Joe',
        description: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        title: 'John Brown',
        owner: 'Jim',
        description: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '5',
        title: 'Jim Green',
        owner: 'Mike',
        description: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        title: 'Joe Black',
        owner: 'Joe',
        description: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
class PlanTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    toProcumentPlan = (record) => {
        console.log(record)

    }
    toList = (action) => {
        let { recordObj } = this.state
        this.setState({
            action: action
        })
        if (action === 'create') {
            history.push({ pathname: `${process.env.PUBLIC_URL}/home/plan`, state: { recordObj: {}, action: action } })
        } else {
            if (recordObj) {
                history.push({ pathname: `${process.env.PUBLIC_URL}/home/plan`, state: { recordObj: recordObj, action: action } })
            } else {
                message.warning('Please select one line first')
            }
        }

    }
    setRecord = (record) => {
        console.log(record)
        this.setState({
            recordObj: record
        })
    }
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
                title: 'Owner',
                dataIndex: 'owner',
                key: 'owner',
            },
            // {
            //     title: 'Action',
            //     key: 'action',
            //     render: (text, record) => (
            //         <span>
            //             <Button type="primary" onClick={this.toProcumentPlan.bind(this,record)}>View</Button>
            //         </span>
            //     ),
            // },
        ];
        return (<div>
            <div>
                <span style={{ fontSize:'0.9rem',fontWeight:'500',color:'#000' }}>Procurement Plan List</span>
                    <ButtonGroup style={{ margin:'0 2rem 6px' }}>
                    <Button type="primary" onClick={this.toList.bind(this, 'approve')}>
                        <Icon type="eye" />
                        View
                            </Button>
                    <Button type="primary" onClick={this.toList.bind(this, 'edit')}>
                        Edit
                                <Icon type="edit" />
                    </Button>
                    <Button type="primary" onClick={this.toList.bind(this, 'create')}>
                        Create
                            <Icon type="plus" />
                    </Button>
                </ButtonGroup>
            </div>
            <Table size='small'
                // onRow={(record, index) => {
                //     return {
                //         onClick: event => { history.push({ pathname: `${process.env.PUBLIC_URL}/home/plan`, state: record }) }, // click row
                //     };
                // }}
                bordered={true}
                style={{ background: '#fff' }} columns={columns} pagination={{ pageSize: 5 }} dataSource={data} />
        </div>);
    }
}

export default PlanTable;