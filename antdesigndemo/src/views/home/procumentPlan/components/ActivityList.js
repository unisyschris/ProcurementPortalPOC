import React from 'react';
import { Table, Input, Button, Icon, Tabs } from 'antd';
import DeleteModal from '../../../../components/DeleteModal';
import ActivityModule from './ActivityModule'
const { TabPane } = Tabs;


const ButtonGroup = Button.Group;
const data = [
    {
        key: '1',
        packageNo: 'John Brown',
        quantity: 32,
        unit: 'New York',
        description: 'My name is John Brown',
        type: 'YES',
        method: 'NCB',
        value: 6
    },
    {
        key: '2',
        packageNo: 'Joe Black',
        quantity: 42,
        unit: 'Lake Park',
        description: 'I living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 1
    },
    {
        key: '3',
        packageNo: 'Jim Green',
        quantity: 32,
        unit: 'Sidney',
        description: 'London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 3
    },
    {
        key: '4',
        packageNo: 'Jim Red',
        quantity: 32,
        unit: 'London',
        description: 'My name is Jim Red',
        type: 'YES',
        method: 'NCB',
        value: 4
    },
    {
        key: '5',
        packageNo: 'John Brown',
        quantity: 12,
        unit: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 12 years old, living in New York No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 2
    },
    {
        key: '6',
        packageNo: 'Joe Black',
        quantity: 32,
        unit: 'London No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 7
    },
    {
        key: '7',
        packageNo: 'Jim Green',
        quantity: 43,
        unit: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 1
    },
    {
        key: '8',
        packageNo: 'Jim Red',
        quantity: 56,
        unit: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 5
    },
    {
        key: '9',
        packageNo: 'Green',
        quantity: 43,
        unit: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 3
    },
    {
        key: '10',
        packageNo: 'Jim Red',
        quantity: 56,
        unit: 'London No. 2 Lake Park',
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
            isShowActions: false,
            recordObj:{},
            action:'create'
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
        }
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
    showModal = (action,e) => {
        console.log(action,e)
        this.setState({
            visible: true,
            action:action
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
    showAction = (record) => {
        console.log(record)
        // let isShowActions =this.state.isShowActions
        this.setState({
            isShowActions:true,
              recordObj:record
        })
    }
    render() {
        let { sortedInfo, isShowActions,recordObj,action } = this.state;
        sortedInfo = sortedInfo || {};
        // const rowSelection = {
        //     onChange: (selectedRowKeys, selectedRows) => {
        //       this.setState({
        //         isShowActions:true,
        //         recordObj:selectedRows[0]
        //       })
        //     },
        //     getCheckboxProps: record => ({
        //       disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //       name: record.name,
        //     }),
        //     type:'radio'
        //   };
        const columns = [
            {
                title: 'PackageNo',
                dataIndex: 'packageNo',
                key: 'packageNo',
                render: (text,row) => <a href="javascript:;" onClick={()=>this.showAction(row)}>{text}</a>,
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'packageNo' && sortedInfo.order
            },
            {
                title: 'General Description',
                dataIndex: 'description',
                key: 'description',
                ...this.getColumnSearchProps('description'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
            },
            {
                title: 'Unit',
                dataIndex: 'unit',
                key: 'unit',

                ...this.getColumnSearchProps('unit'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'unit' && sortedInfo.order,
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',

                ...this.getColumnSearchProps('quantity'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'quantity' && sortedInfo.order,
            },
            {
                title: 'Review Type',
                dataIndex: 'type',
                key: 'type',

                ...this.getColumnSearchProps('type'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            },
            {
                title: 'Method',
                dataIndex: 'method',
                key: 'method',

                ...this.getColumnSearchProps('method'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'method' && sortedInfo.order,
            },
            {
                title: 'Estimated Value',
                dataIndex: 'value',
                key: 'value',
                width: '10%',
                ...this.getColumnSearchProps('value'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
            }
        ];
        // onChange:this.onChange  showQuickJumper:true,
        return (
            <div style={{ paddingBottom: '30px' }}>
                <span >
                    {isShowActions ?
                        <ButtonGroup>
                            <Button type="primary" onClick={this.showModal.bind(this,'approve')}>
                                <Icon type="eye" />
                                View
                            </Button>
                            <Button type="primary" onClick={this.showModal.bind(this,'edit')}>
                                Edit
                                <Icon type="edit" />
                            </Button>
                            <Button type="primary" onClick={this.showModal.bind(this,'create')}>
                               Create
                            <Icon type="plus" />
                            </Button>
                        </ButtonGroup> :
                        <Button type="primary" onClick={this.showModal.bind(this,'create')}>
                            Add
                            <Icon type="plus" />
                        </Button>
                    }
                </span>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Works" key="1">
                        {/* rowSelection={rowSelection} */}
                        <Table bordered  scroll={{ x: 1800 }} pagination={{ pageSize: 5 }} columns={columns} size='small'
                        //  onRow={(record, index) => {
                        //     return {
                        //         onClick: event =>{this.showAction(record)} // click row
                        //       };
                        //  }}
                            dataSource={data.slice(0, 4)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Goods" key="2">
                        <Table   scroll={{ x: 1800 }} pagination={{ pageSize: 5 }} columns={columns} size='small'
                            bordered={false}
                            dataSource={data.slice(3, 9)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Non Consulting Services" key="3">
                        <Table  scroll={{ x: 1800 }} pagination={{ pageSize: 5 }} columns={columns} size='small'
                            dataSource={data} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Consulting Services" key="4">
                        <Table  scroll={{ x: 1800 }} pagination={{ pageSize: 5 }} columns={columns} size='small'
                            dataSource={data.slice(2, 7)} onChange={this.handleChange} />
                    </TabPane>
                </Tabs>
                <div>
                    <ActivityModule action={action} record={action==='create'?{}:recordObj} visible={this.state.visible} handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading}></ActivityModule>
                    {/* <DeleteModal handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading} ></DeleteModal> */}
                </div>
            </div>

        );
    }
}

export default ActivityList