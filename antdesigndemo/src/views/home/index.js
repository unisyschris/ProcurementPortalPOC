import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import Complaints from './complaints/Complaints'
import PlanHome from './procumentPlan/PlanHome.Container'
import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import ProcumentPlan from './procumentPlan/pages/PlanDetail';
import Management from './management/index';
import PlanStatusList from './procumentPlan/pages/PlanStatusList.Container';
import Nofound from './Nofound'
const { Header, Content, Footer } = Layout;

const breadcrumbNameMap = {
  '/home': 'Procurement Plan',
  '/home/review': 'Review Request',
  '/home/approved': 'Approve Request',
  '/home/submited': 'Submited Request',
  '/home/saved': 'Save Request',
  '/home/plan': 'Procurement Plan Detail',
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
    console.log(props.location.pathname)
    let key = props.location.pathname
    this.state = {
      selectKey: key.includes('complaints') ? '3' : key.includes('management') ? '2' : '1',
    }
  }
  render() {
    let { selectKey } = this.state
    const {isNoFound} = this.props
    return (<div id="components-layout-demo-fixed">

      <Layout>
        <Header style={{ display: isNoFound ? 'none' : 'block' }}>
          <span className="logo" style={{ fontSize: '30px', fontWeight: '600', color: '#fff', display: 'inline-block', lineHeight: '48px' }}>Demo</span>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectKey]}
          >
            <Menu.Item key="1" ><Link to={`${process.env.PUBLIC_URL}/home`}>Procurement plan</Link></Menu.Item>
            <Menu.Item key="2"><Link to={`${process.env.PUBLIC_URL}/management`}>Contract Management</Link></Menu.Item>
            <Menu.Item key="3"><Link to={`${process.env.PUBLIC_URL}/complaints`}>Complaints Monitoring</Link></Menu.Item>
            <Menu.Item key="4" style={{ float: 'right' }}><Link to={`${process.env.PUBLIC_URL}/login`}>Logout</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className="h-content">
          <Bread style={{ display: isNoFound ? 'none' : 'block' }}></Bread>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/home`} component={PlanHome}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/review`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/approved`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/saved`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/submited`} component={PlanStatusList}></Route>
            <Route path={`${process.env.PUBLIC_URL}/home/plan`} component={ProcumentPlan}></Route>
            <Route path={`${process.env.PUBLIC_URL}/management`} component={Management}></Route>
            <Route path={`${process.env.PUBLIC_URL}/complaints`} component={Complaints}></Route>
            <Redirect exact path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/home`} ></Redirect>
            <Route path={`${process.env.PUBLIC_URL}/404`} component={Nofound}></Route>
            <Redirect from='*' to='/404' />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', width: '100vw' ,display: isNoFound ? 'none' : 'block' }}>Ant Design Demo ©2019 Created by Xiaohui</Footer>
      </Layout>
    </div>)
  }
}

export default HomePage;