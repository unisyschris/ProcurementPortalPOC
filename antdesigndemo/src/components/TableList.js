import React from 'react';
import { Table, Input, Button, Icon, Tag } from 'antd';
// import Highlighter from 'react-highlight-words';
import DeleteModal from '../components/DeleteModal'
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: '2',
        name: 'Joe Black',
        age: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
        key: '3',
        name: 'Jim Green',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
        key: '5',
        name: 'John Brown',
        age: 12,
        address: 'New York No. 1 Lake Park',
        description: 'My name is John Brown, I am 12 years old, living in New York No. 1 Lake Park.',
    },
    {
        key: '6',
        name: 'Joe Black',
        age: 32,
        address: 'London No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
    {
        key: '7',
        name: 'Jim Green',
        age: 43,
        address: 'Sidney No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: '8',
        name: 'Jim Red',
        age: 56,
        address: 'London No. 2 Lake Park',
        description: 'My name is Jim Red, I am 32 years old, living in Sidney No. 1 Lake Park.',
    },
];

class TableList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: '',
            sortedInfo: null,
            loading: false,
            visible: false,
        };
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
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                width: '30%',
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
                width: '20%',
                ...this.getColumnSearchProps('age'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
                ...this.getColumnSearchProps('address'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            },
            {
                title: 'Action',
                dataIndex: '',
                key: 'x',
                render: (text, record) =>
                    // <Tag onClick={()=>this.deleteRecord(record)}  color="red">Delete</Tag>
                    <Button type="link" onClick={this.showModal} size="small" theme="filled" >Delete</Button>

            },
        ];
        // onChange:this.onChange  showQuickJumper:true,
        return (
            <div>
                <Table pagination={{ pageSize: 5, hideOnSinglePage: true }} columns={columns} size="middle"
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data} onChange={this.handleChange} />
                <div>
                    <DeleteModal handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading} visible={this.state.visible}></DeleteModal>
                </div>
            </div>

        );
    }
}

export default TableList