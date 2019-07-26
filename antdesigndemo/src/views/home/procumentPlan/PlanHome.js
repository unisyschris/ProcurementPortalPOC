import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon, Table, message } from 'antd';
import { Link } from 'react-router-dom';
import { history } from '../../../utils/history';
const ButtonGroup = Button.Group;
class PlanHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowId: '0',
            dataSource:[],
            loading: false,
        }
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        this.props.getPlanList()
        .then(res=>{
          if(res){
              this.setState({
                dataSource:res.data,
                loading:false
              })
          }
        })
        .catch(error=>{
            console.log(error)
        })
    }
    toList = (action) => {
        let { recordObj } = this.state
        console.log(recordObj)
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
    toListNew =(row)=>{
        history.push({ pathname: `${process.env.PUBLIC_URL}/home/plan`, state: { recordObj: row, action:'approve' } })
    }
    render() {
        let {dataSource,loading} = this.state
        const columns = [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
                render: (text, row) => <u onClick={this.toListNew.bind(this, row)} style={{ cursor: 'pointer' }} >{text}</u>,
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
            }
        ];
        return (<div>
            <div style={{ background: '#fff', padding: '0.5rem 1rem', marginBottom: 12 }}>
                <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#000', marginBottom: 6, display: 'inline-block', }}>Procurement Plan Status</span>
                    <Row gutter={40}>
                        <Col span={6} >
                            <Link to={`${process.env.PUBLIC_URL}/home/saved`}>    <Card bordered={false}>
                                <div>
                                    <Icon type="save" style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}></Icon>
                                </div>
                                <span>Saved </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/submited`}>     <Card bordered={false}>
                                <div>
                                    <Icon type="highlight" style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}></Icon>
                                </div>
                                <span>
                                    Submitted
                                </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/review`}>
                                <Card bordered={false}>
                                    <div>
                                        <Icon type="eye" style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}></Icon>
                                    </div>
                                    <span>
                                        Review
                                   </span>
                                </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/approved`}>
                                <Card bordered={false}>
                                    <div>
                                        <Icon type="check-circle" style={{ fontSize: '1.8rem', marginBottom: '0.6rem' }}></Icon>
                                    </div>
                                    <span>Approved</span>
                                </Card>
                            </Link>
                        </Col>

                    </Row>
                </div>

            </div>
            <div style={{ background: '#fff', padding: '0.5rem 1rem 40px', height: 'auto' }}>
                <div>
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#000' }}>Procurement Plan List</span>
                    <ButtonGroup style={{ margin: '0 2rem 6px', float: 'right' }}>
                        {/* <Button type="primary" onClick={this.toList.bind(this, 'approve')}>
                            <Icon type="eye" />
                            View
                            </Button> */}
                        <Button type="primary" onClick={this.toList.bind(this, 'edit')}>
                            Edit
                                <Icon type="edit" />
                        </Button>
                        {/* <Button type="primary" onClick={this.toList.bind(this, 'delete')}>
                        Delete
                            <Icon type="delete" />
                    </Button> */}
                        <Button type="primary" onClick={this.toList.bind(this, 'create')}>
                            Create
                            <Icon type="plus" />
                        </Button>
                    </ButtonGroup>
                </div>
                <Table size='small'
                loading={loading}
                    rowClassName={(record) => {
                        return record.key === this.state.rowId ? 'clickRowStyl' : '';
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
                    bordered={true}
                    style={{ background: '#fff' }} columns={columns} pagination={{ pageSize: 5 }} dataSource={dataSource} />
            </div>
        </div>)
    }
}

export default PlanHome;