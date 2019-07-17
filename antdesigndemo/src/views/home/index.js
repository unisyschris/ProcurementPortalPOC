import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Complaints from './complaints/Complaints'
import Home from './dashboard/index'
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import ProcumentPlan from './procumentPlan/index';
import Management from './management/index';
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
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb style={{ margin: '0.3rem 1rem' }}>{breadcrumbItems}</Breadcrumb>
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
        <Header>
          {/* <div className="logo" style={{ fontSize:'18px'}}>Demo</div> */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
          >
            <Menu.Item key="d" disabled={true} style={{ cursor: 'default' }}><div style={{fontSize:'30px',fontWeight:'600',color:'#fff'}}>Demo</div>
              {/* <img src={`${process.env.PUBLIC_URL}/images/unisys_small.png`} alt="d"></img> */}
            </Menu.Item>
            <Menu.Item key="1" ><Link to={`${process.env.PUBLIC_URL}/home`}>Procurement plan</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`${process.env.PUBLIC_URL}/management`}>Contract Management</Link></Menu.Item>
            <Menu.Item key="4"><Link to={`${process.env.PUBLIC_URL}/complaints`}>Complaints Monitoring</Link></Menu.Item>
            <Menu.Item key="5" style={{ float: 'right' }}><Link to={`${process.env.PUBLIC_URL}/login`}>Logout</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="h-content">
          <Bread ></Bread>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/review`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/approved`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/saved`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/submited`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/plan`} component={ProcumentPlan}></Route>
            <Route path={`${process.env.PUBLIC_URL}/management`} component={Management}></Route>
            <Route path={`${process.env.PUBLIC_URL}/complaints`} component={Complaints}></Route>
            <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/home`} ></Redirect>
            <Route component={Nofound}></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100vw' }}>Ant Design Demo ©2019 Created by Xiaohui</Footer>
      </Layout>
    </div>)
  }
}

export default HomePage;