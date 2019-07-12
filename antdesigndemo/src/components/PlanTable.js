import React, { Component } from 'react';
import { Table, Tag,Button } from 'antd';
import {history} from '../utils/history'


const data = [
    {
        key: '1',
        name: 'John Brown',
        owner: 'Jim',
        desc: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        owner: 'Mike',
        desc: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        owner: 'Joe',
        desc: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        name: 'John Brown',
        owner: 'Jim',
        desc: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '5',
        name: 'Jim Green',
        owner: 'Mike',
        desc: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        name: 'Joe Black',
        owner: 'Joe',
        desc: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
class PlanTable extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    toProcumentPlan=(record)=>{
        console.log(record)
        history.push({pathname:`${process.env.PUBLIC_URL}/home/plan`,state:record})
    }
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: text => <span>{text}</span>,
            },
            {
                title: 'Description',
                dataIndex: 'desc',
                key: 'desc',
            },
            {
                title: 'Owner',
                dataIndex: 'owner',
                key: 'owner',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <Button type="primary" onClick={this.toProcumentPlan.bind(this,record)}>View</Button>
                    </span>
                ),
            },
        ];
        return (<div>
            
            <Table style={{background:'#fff'}} columns={columns} pagination={{ pageSize:5}} dataSource={data} />
        </div>);
    }
}

export default PlanTable;