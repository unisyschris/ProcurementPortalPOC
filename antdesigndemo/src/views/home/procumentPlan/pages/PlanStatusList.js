import React, { Component } from 'react';
import { Table, Input, Button, Icon, Tag } from 'antd';
import TableList from '../../../../components/TableList';
import DeleteModal from '../../../../components/modals/DeleteModal'
class PlanStatusList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchText: '',
            sortedInfo: null,
            loading: false,
            visible: false,
            dataSource:[]
         }
    }
    componentDidMount(){
        this.setState({
            loading: true
        })
        this.props.getStatusPlanList()
        .then(res=>{
            if(res){
                this.setState({
                    dataSource:res.data,
                    loading: false
                })
            }
        })
    }
    componentWillUnmount = () => {
        this.setState = (state,callback)=>{
          return;
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
      }
    render() { 
        let { sortedInfo ,dataSource,loading} = this.state;
        sortedInfo = sortedInfo || {};
        const columns = [
            {
                title: 'PackageNo',
                dataIndex: 'name',
                key: 'name',
               
                ...this.getColumnSearchProps('name'),
                sorter: (a, b) => a.name.length - b.name.length,
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
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
                dataIndex: 'address',
                key: 'address',
              
                ...this.getColumnSearchProps('address'),
                sorter: (a, b) => a.address.length - b.address.length,
                sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
            },
            {
                title: 'Quantity',
                dataIndex: 'age',
                key: 'age',
               
                ...this.getColumnSearchProps('age'),
                sorter: (a, b) => a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
            },
            {
                title: 'Review Type',
                dataIndex: 'type',
                key: 'type',
              
                ...this.getColumnSearchProps('type'),
                sorter: (a, b) => a.type.length - b.type.length,
                sortOrder: sortedInfo.columnKey === 'type' && sortedInfo.order,
            },
            {
                title: 'Method',
                dataIndex: 'method',
                key: 'method',
                
                ...this.getColumnSearchProps('method'),
                sorter: (a, b) => a.method.length - b.method.length,
                sortOrder: sortedInfo.columnKey === 'method' && sortedInfo.order,
            },
            {
                title: 'Estimated Value',
                dataIndex: 'value',
                key: 'value',
                
                ...this.getColumnSearchProps('value'),
                sorter: (a, b) => a.value.length - b.value.length,
                sortOrder: sortedInfo.columnKey === 'value' && sortedInfo.order,
            }
        ];
        return ( <div style={{height:'auto',backgroundColor:'#fff',padding:'10px 16px 50px'}}>
           <h2>PlanStatusList</h2>
           <div>
                <Table 
                 rowClassName={(record)=>{
                    return   record.key === this.state.rowId ? 'clickRowStyl' : '';
                   }}
                   onRow={(record, index) => {
                       return {
                           onClick: () => {
                               this.setState({
                                 rowId: record.key,
                               });
                             },
                       };
                   }}
                   loading={loading}
                scroll={{ x: 1800 }} size='small' bordered pagination={{ pageSize:8 }} columns={columns} 
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={dataSource} onChange={this.handleChange} />
             
                <div>
                    <DeleteModal handleCancel={this.handleCancel} handleOk={this.handleOk} showModal={this.showModal} loading={this.state.loading} visible={this.state.visible}></DeleteModal>
                </div>
            </div>
        </div> );
    }
}
 
export default PlanStatusList;