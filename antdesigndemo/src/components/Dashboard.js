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
            <div style={{ background: '#fff', padding:'0.5rem 1rem',marginBottom: 12 }}>

                <div>
                <span style={{ fontSize:'0.9rem',fontWeight:'500',color:'#000',marginBottom: 6, display: 'inline-block',}}>Procurement Plan Status</span>
                    <Row gutter={40}>
                        <Col span={6} >
                            <Link to={`${process.env.PUBLIC_URL}/home/saved`}>    <Card bordered={false}>
                                <div>
                                    <Icon type="save" style={{ fontSize: '1.8rem',marginBottom:'0.6rem' }}></Icon>
                                </div>
                                <span>Saved </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/submited`}>     <Card  bordered={false}>
                                <div>
                                    <Icon type="highlight" style={{ fontSize: '1.8rem',marginBottom:'0.6rem' }}></Icon>
                                </div>
                                <span>
                                Submitted
                                </span>
                            </Card>
                            </Link>
                        </Col>
                        <Col span={6}>
                            <Link to={`${process.env.PUBLIC_URL}/home/review`}>
                                <Card  bordered={false}>
                                    <div>
                                        <Icon type="eye" style={{ fontSize: '1.8rem',marginBottom:'0.6rem' }}></Icon>
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
                                        <Icon type="check-circle" style={{ fontSize: '1.8rem' ,marginBottom:'0.6rem'}}></Icon>
                                    </div>
                                    <span>Approved</span>
                                </Card> 
                                </Link>
                        </Col>

                    </Row>
                </div>

            </div>
            <div style={{ background: '#fff', padding:'0.5rem 1rem 40px',height:'auto' }}>
               
                {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 6, display: 'inline-block', float: 'right' }}>
                    <Link to={`${process.env.PUBLIC_URL}/home/plan`}>Add</Link>
                </Button> */}
                <PlanTable></PlanTable>
            </div>
        </div>)
    }
}

export default Dashboard;