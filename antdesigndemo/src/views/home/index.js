import React, { Component } from 'react';
import { Card, Col, Row, Layout, Menu, Breadcrumb, Button } from 'antd';
import Complaints from './complaints/Complaints'
import Home from './dashboard/index'
import { Route, Switch,Link,Redirect,withRouter } from 'react-router-dom';
import ProcumentPlan from './procumentPlan/index';
import Management from './management/index';
// import {withRouter} from 'react-router';
import PlanStatusList from './PlanStatusList';
import Nofound from './Nofound'
const { Header, Content, Footer } = Layout;

const breadcrumbNameMap = {
    '/home': 'Procurement Plan',
    '/home/review': 'Review Request',
    '/home/approved': 'Approve Request',
    '/home/submited': 'Submited Request',
    '/home/saved': 'Save Request',
    '/home/plan': 'Procurement Plan List',
    '/management': 'Contract Management',
    '/complaints': 'Complaints Monitoring',
    };
  const Bread = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        {/* <Link to="/">Home</Link> */}
      </Breadcrumb.Item>,
    ].concat(extraBreadcrumbItems);
    return (
        <Breadcrumb style={{ margin: '10px 0' }}>{breadcrumbItems}</Breadcrumb>
    );
  });

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
      
        
        return (<div id="components-layout-demo-fixed">
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%',height:'64px' }}>
                    {/* <div className="logo" ><img src={`${process.env.PUBLIC_URL}/images/logo-aiib.svg`} style={{height:'26px'}} alt="AIIB"></img></div> */}
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                         <Menu.Item key="dd" disabled={true} style={{cursor:'default'}}><img src={`${process.env.PUBLIC_URL}/images/logo-aiib.svg`} alt="d"></img></Menu.Item>
                        <Menu.Item key="1" ><Link to={`${process.env.PUBLIC_URL}/home`}>Procurement plan</Link></Menu.Item>
                        {/* <Menu.Item key="2"><Link to={`${process.env.PUBLIC_URL}/home/plan`}>Procument Plan</Link></Menu.Item> */}
                        <Menu.Item key="3"><Link to={`${process.env.PUBLIC_URL}/management`}>Contract Management</Link></Menu.Item>
                        <Menu.Item key="4"><Link to={`${process.env.PUBLIC_URL}/complaints`}>Complaints Monitoring</Link></Menu.Item>
                        <Menu.Item key="5"  style={{float:'right'}}><Link to={`${process.env.PUBLIC_URL}/login`}>Logout</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '64px 50px 0',height:'100%',backgroundColor:'#f0f2f5'}}>
                 
                      {/* <Breadcrumb style={{ margin: '10px 0' }}>
                      {   location.pathname.split('/').map((val,index)=>{
                           return  <Breadcrumb.Item key={index}>{val? val:''}</Breadcrumb.Item>
                        })
                    }
                    </Breadcrumb> */}
                    {/* <Breadcrumb></Breadcrumb> */}
                    {/* <Breadcrumb itemRender={this.itemRender} routes={routes} /> */}
                    <Bread ></Bread>
                   <Switch>
                    <Route exact  path={`${process.env.PUBLIC_URL}/home`} component={Home}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/home/review`} component={PlanStatusList}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/home/approved`} component={PlanStatusList}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/home/saved`} component={PlanStatusList}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/home/submited`} component={PlanStatusList}></Route>
                       {/* <Route path={`${process.env.PUBLIC_URL}/home/index`} component={Home}></Route> */}
                       <Route path={`${process.env.PUBLIC_URL}/home/plan`} component={ProcumentPlan}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/management`} component={Management}></Route>
                       <Route path={`${process.env.PUBLIC_URL}/complaints`} component={Complaints}></Route>
                       <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/home`} ></Redirect>
                       <Route  component={Nofound}></Route>
                   </Switch>
                </Content>
                <Footer style={{ textAlign: 'center',position:'fixed',bottom:'0',width:'100vw' }}>Ant Design Demo ©2019 Created by Unisys</Footer>
            </Layout>
        </div>)
    }
}

export default HomePage;