import React from 'react';
import { Table, Input, Button, Icon, Tag, Tabs } from 'antd';
import DeleteModal from './DeleteModal';
const { TabPane } = Tabs;
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 6
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 1
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 3
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 4
    },
    {
        key: '5',
        name: 'John Brown',
        age: 12,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 12 years old, living in New York No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 2
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'London No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 7
    },
    {
        key: '7',
        name: 'Jim Green',
        age: 43,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 1
    },
    {
        key: '8',
        name: 'Jim Red',
        age: 56,
        address: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 5
    },
    {
        key: '9',
        name: 'Green',
        age: 43,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 3
    },
    {
        key: '10',
        name: 'Jim Red',
        age: 56,
        address: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'NO',
        method: 'NCB',
        value: 2
    },
];

class ActivityList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            sortedInfo: null,
            loading: false,
            visible: false,
        };
    }
    callback = (key) => {
        console.log(key);
    }
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        this.setState({
            sortedInfo: sorter,
        });
    };
    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary" icon="search"
                    size="small"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}

                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        // render: text => (
        //   <Highlighter
        //     highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //     searchWords={[this.state.searchText]}
        //     autoEscape
        //     textToHighlight={text.toString()}
        //   />
        // ),
    });
    deleteRecord = (record) => {
        console.log(record)
    }
    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    onChange = (pageNumber) => {
        console.log('Page: ', pageNumber);
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
        let { sortedInfo } = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [
            {
                title: 'PackageNo',
                dataIndex: 'name',
                key: 'name',
                width: '8%',
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'General Description',
                dataIndex: 'description',
                key: 'description',
                width: '34%',
                ...this.getColumnSearchProps('description'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
            },
            {
                title: 'Unit',
                dataIndex: 'address',
                key: 'address',
                width: '16%',
                ...this.getColumnSearchProps('address'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            },
            {
                title: 'Quantity',
                dataIndex: 'age',
                key: 'age',
                width: '6%',
                ...this.getColumnSearchProps('age'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: 'Review Type',
                dataIndex: 'type',
                key: 'type',
                width: '10%',
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Method',
                dataIndex: 'method',
                key: 'method',
                width: '6%',
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Estimated Value',
                dataIndex: 'value',
                key: 'value',
                width: '10%',
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: (text, record) =>
                    // <Tag onClick={()=>this.deleteRecord(record)}  color="red">Delete</Tag>
                    <Button type="link" onClick={this.showModal} size="small" theme="filled" >Detail</Button>

            },
        ];
        // onChange:this.onChange  showQuickJumper:true,
        return (
            <div style={{ paddingBottom: '30px' }}>
                {/* <h3>
                    Activity List
                </h3> */}
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Works" key="1">
                        <Table pagination={{ pageSize: 8  }} columns={columns} size="middle"
                            // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                            dataSource={data.slice(0,4)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Goods" key="2">
                        <Table pagination={{ pageSize: 8 }} columns={columns} size="middle"
                            dataSource={data.slice(3,9)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Non Consulting Services" key="3">
                        <Table pagination={{ pageSize: 8 }} columns={columns} size="middle"
                            dataSource={data} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Consulting Firms" key="4">
                        <Table pagination={{ pageSize: 8 }} columns={columns} size="middle"
                            dataSource={data.slice(2,7)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Individual Consultants" key="5">
                        <Table pagination={{ pageSize: 8 }} columns={columns} size="middle"
                            dataSource={data.slice(7,9)} onChange={this.handleChange} />
                    </TabPane>
                </Tabs>
                {/* <Table pagination={{ pageSize: 8, hideOnSinglePage: true }} columns={columns} size="middle"
                    // expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data} onChange={this.handleChange} /> */}
                <div>
                    <DeleteModal handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading} visible={this.state.visible}></DeleteModal>
                </div>
            </div>

        );
    }
}

export default ActivityList