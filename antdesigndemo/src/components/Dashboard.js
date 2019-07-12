import React, { Component } from 'react';
import { Card, Col, Row, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import PlanTable from './PlanTable'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <div style={{ background: '#fff', padding: 24,marginBottom: 12 }}>

                <div style={{ padding: '5px 8px' }}>
                    <h4 style={{ marginBottom: 16 }}>Procurement Plan Status</h4>
                    <Row gutter={40}>
                        <Col span={6} >
                            <Link to={`${process.env.PUBLIC_URL}/home/saved`}>    <Card bordered={false}>
                                <div>
                                    <Icon type="save" style={{ fontSize: '40px',marginBottom:'20px' }}></Icon>
                                </div>
                                <span> My Save Request </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/submited`}>     <Card  bordered={false}>
                                <div>
                                    <Icon type="highlight" style={{ fontSize: '40px',marginBottom:'20px' }}></Icon>
                                </div>
                                <span>
                                Submitted Request
                                </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/review`}>
                                <Card  bordered={false}>
                                    <div>
                                        <Icon type="eye" style={{ fontSize: '40px',marginBottom:'20px' }}></Icon>
                                    </div>
                                   <span>
                                   Review
                                   </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/approved`}>
                                <Card  bordered={false}>
                                    <div>
                                        <Icon type="check-circle" style={{ fontSize: '40px' ,marginBottom:'20px'}}></Icon>
                                    </div>
                                    <span>  Approved</span>
                                </Card> 
                                </Link>
                        </Col>

                    </Row>
                </div>

            </div>
            <div style={{ background: '#fff', padding:'24px 24px 40px',height:'auto' }}>
                <h4 style={{ marginBottom: 16, display: 'inline-block' }}>Procurement Plan List</h4>
                <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16, display: 'inline-block', float: 'right' }}>
                    <Link to={`${process.env.PUBLIC_URL}/home/plan`}>Add</Link>
                </Button>
                <PlanTable></PlanTable>
            </div>
        </div>)
    }
}

export default Dashboard;