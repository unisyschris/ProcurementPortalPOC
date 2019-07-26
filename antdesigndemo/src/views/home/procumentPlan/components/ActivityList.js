import React from 'react';
import { Table, Input, Button, Icon, Tabs, message } from 'antd';
import DeleteModal from '../../../../components/modals/DeleteModal';
import ActivityModule from './ActivityModule'
const { TabPane } = Tabs;


const ButtonGroup = Button.Group;
const data = [
    {
        key: '1',
        packageNo: 'NSUP-OSP-1',
        quantity: 32,
        unit: 'IBRD / 86360',
        description: 'Oversight Service Provider(OSP) Package 1 (Jawa Tengah-1)',
        type: 'Prior',
        method: 'NCB',
        value: '5,010,468.00'
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
        unit: 'Lake Park',
        description: 'My name is John Brown,living in New York No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 2
    },
    {
        key: '6',
        packageNo: 'Joe Black',
        quantity: 32,
        unit: 'No. 1',
        description: 'My name is Joe Black, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 7
    },
    {
        key: '7',
        packageNo: 'Jim Green',
        quantity: 43,
        unit: 'Sidney',
        description: 'I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 1
    },
    {
        key: '8',
        packageNo: 'Jim Red',
        quantity: 56,
        unit: 'Lake Park',
        description: 'I am 32 years old, living in Sidney No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 5
    },
    {
        key: '9',
        packageNo: 'Green',
        quantity: 43,
        unit: 'Lake Park',
        description: 'I am 42 years old, living in London No. 1 Lake Park.',
        type: 'YES',
        method: 'NCB',
        value: 3
    },
    {
        key: '10',
        packageNo: 'Jim Red',
        quantity: 56,
        unit: 'London',
        description: 'I am 32 years old, living in Sidney No. 1 Lake Park.',
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
            recordObj: {},
            action: 'create',
            rowId:'0'
        };
    }
    callback = (key) => {
        this.setState({
            recordObj:{},
            rowId:'0'
        })
    }
    handleChange = (pagination, filters, sorter) => {
        // console.log('Various parameters', pagination, filters, sorter);
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
    showModal = (action, e) => {
        let { recordObj } = this.state
        console.log(recordObj, action)
        if (!recordObj.packageNo) {
            console.log(1)
            if (action !== 'create') {
               
                message.warning('Please select one line first')
            } else {
                console.log(3)
                this.setState({
                    visible: true,
                    action: action
                });
               
            }
        }else{
            console.log(4)
            this.setState({
                visible: true,
                action: action
            });
        }

    };
    showModalNew=(row)=>{
        this.setState({
            recordObj:row,
            visible: true,
            action: 'approve'
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false,
             });
    };
    // showAction = (record) => {
    //     console.log(record)
    //     // let isShowActions =this.state.isShowActions
    //     this.setState({
    //         isShowActions: true,
    //         recordObj: record
    //     })
    // }
    render() {
        let { sortedInfo, isShowActions, recordObj, action } = this.state;
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
                width: '5%',
                // onClick={() => this.showAction(row)}
                render: (text, row) => <u onClick={this.showModalNew.bind(this,row)} style={{cursor:'pointer'}} >{text}</u>,
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'packageNo' && sortedInfo.order
            },
            {
                title: 'General Description',
                dataIndex: 'description',
                key: 'description',
                // width: '20%',
                ...this.getColumnSearchProps('description'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'description' && sortedInfo.order,
            },
            {
                title: 'Unit',
                dataIndex: 'unit',
                key: 'unit',
                width: '12%',
                ...this.getColumnSearchProps('unit'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'unit' && sortedInfo.order,
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'quantity',
                width: '8%',
                ...this.getColumnSearchProps('quantity'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'quantity' && sortedInfo.order,
            },
            {
                title: 'Review Type',
                dataIndex: 'type',
                key: 'type',
                width: '8%',
                ...this.getColumnSearchProps('type'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            },
            {
                title: 'Method',
                dataIndex: 'method',
                key: 'method',
                width: '6%',
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
                    <ButtonGroup>
                        {/* <Button type="primary" onClick={this.showModal.bind(this, 'approve')}>
                            <Icon type="eye" />
                            View
                            </Button> */}
                        <Button type="primary" onClick={this.showModal.bind(this, 'edit')}>
                            Edit
                                <Icon type="edit" />
                        </Button>
                        <Button type="primary" onClick={this.showModal.bind(this, 'delelte')}>
                            Delete
                                <Icon type="delete" />
                        </Button>
                        <Button type="primary" onClick={this.showModal.bind(this, 'create')}>
                            Create
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                  
                </span>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Works" key="1">
                        {/* rowSelection={rowSelection} scroll={{ x: 1800 }} */}
                        <Table bordered  pagination={{ pageSize: 5 }} columns={columns} size='small'
                             rowClassName={(record)=>{
                                return   record.key === this.state.rowId ? 'clickRowStyl' : '';
                               }}
                               onRow={(record, index) => {
                                   return {
                                       onClick: () => {
                                           this.setState({
                                             rowId: record.key,
                                             recordObj: record
                                           });
                                         },
                                   };
                               }}
                            dataSource={data.slice(0, 4)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Goods" key="2">
                        <Table  pagination={{ pageSize: 5 }} columns={columns} size='small'
                            bordered={false}
                            rowClassName={(record)=>{
                                return   record.key === this.state.rowId ? 'clickRowStyl' : '';
                               }}
                               onRow={(record, index) => {
                                   return {
                                       onClick: () => {
                                           this.setState({
                                             rowId: record.key,
                                             recordObj: record
                                           });
                                         },
                                   };
                               }}
                            dataSource={data.slice(3, 9)} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Non Consulting Services" key="3">
                        <Table  pagination={{ pageSize: 5 }} columns={columns} size='small'
                          rowClassName={(record)=>{
                            return   record.key === this.state.rowId ? 'clickRowStyl' : '';
                           }}
                           onRow={(record, index) => {
                               return {
                                   onClick: () => {
                                       this.setState({
                                         rowId: record.key,
                                         recordObj: record
                                       });
                                     },
                               };
                           }}
                         dataSource={data} onChange={this.handleChange} />
                    </TabPane>
                    <TabPane tab="Consulting Services" key="4">
                        <Table  pagination={{ pageSize: 5 }} columns={columns} size='small'
                             rowClassName={(record)=>{
                                return   record.key === this.state.rowId ? 'clickRowStyl' : '';
                               }}
                               onRow={(record, index) => {
                                   return {
                                       onClick: () => {
                                           this.setState({
                                             rowId: record.key,
                                             recordObj: record
                                           });
                                         },
                                   };
                               }}
                            dataSource={data.slice(2, 7)} onChange={this.handleChange} />
                    </TabPane>
                </Tabs>
                <div>
                    <ActivityModule action={action} record={action === 'create' ? {} : recordObj} visible={this.state.visible} handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading}></ActivityModule>
                    {/* <DeleteModal handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading} ></DeleteModal> */}
                </div>
            </div>

        );
    }
}

export default ActivityList