import React, { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';
import Module5 from './pages/Module5';
import Module6 from './pages/Module6';
import Module7 from './pages/Module7';
import Module8 from './pages/Module8';
import Module9 from './pages/Module9';
import Module10 from './pages/Module10';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import RightDrawer from '../../components/RightDrawer';
import Dashboard from '.'
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;


class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props.location.pathname)
        let key = props.location.pathname.charAt(props.location.pathname.length - 1)
        console.log(key)
        this.state = {
            collapsed: false,
            selectKey: key === 'd'||key === '/' ? '1' : key,
            breadcrumb: props.location.pathname,
            drawerVisible: false
        }
    }
    componentDidMount() {
        console.log(this.state.breadcrumb)
    }
    showDrawer = () => {
        console.log('show')
        this.setState({
            drawerVisible: true,
        });
    };

    onCloseDrawer = () => {
        this.setState({
            drawerVisible: false,
        });
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    goDashboard = () => {
        this.setState({
            selectKey: 0
        });
    }
    logoutEvent = () => {
        this.props.history.push(`${process.env.PUBLIC_URL}/login`)
    }
    render() {
        let { selectKey } = this.state
        return (<div>
            <Layout
            // style={{ minHeight: '100vh' }}
            >
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ minHeight: '100vh' }}>

                    {/* <img src="./images/Unisys-logo-white.png" alt="Unisys" style={{width:'160px'}}></img> */}
                    <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                        <div className="logo" onClick={this.goDashboard}>
                            AIIB
                            </div>
                    </Link>

                    <Menu
                        theme="dark" mode="inline" defaultSelectedKeys={[selectKey]} defaultOpenKeys={['sub1']}
                        collapsed={this.state.collapsed.toString()}>
                        <Menu.Item key="1">
                            <Link to={`${process.env.PUBLIC_URL}/dashboard`}>
                                <Icon type="pie-chart" />
                                <span>Dashboard</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`${process.env.PUBLIC_URL}/module2`}>
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={`${process.env.PUBLIC_URL}/module3`}>
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={`${process.env.PUBLIC_URL}/module4`}>
                                <Icon type="inbox" />
                                <span>Option 3</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5"><Link to={`${process.env.PUBLIC_URL}/module5`}>  <Icon type="bank" />
                            <span>Option 4</span></Link></Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>Navigation One</span>
                                </span>
                            }
                        >
                            <Menu.Item key="6"><Link to={`${process.env.PUBLIC_URL}/module6`}>Option 5</Link></Menu.Item>
                            <Menu.Item key="7"><Link to={`${process.env.PUBLIC_URL}/module7`}>Option 6</Link></Menu.Item>

                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                    <Icon type="appstore" />
                                    <span>Navigation Two</span>
                                </span>
                            }
                        >
                            <Menu.Item key="8"><Link to={`${process.env.PUBLIC_URL}/module8`}>Option 7</Link></Menu.Item>
                            <Menu.Item key="9"><Link to={`${process.env.PUBLIC_URL}/module9`}>Option 8</Link></Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="10"><Link to={`${process.env.PUBLIC_URL}/module10`}>Option 9</Link></Menu.Item>
                                <Menu.Item key="11"><Link to={`${process.env.PUBLIC_URL}/module11`}>Option 10</Link></Menu.Item>
                            </SubMenu>
                        </SubMenu>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, position: 'relative' }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Button style={{ color: '#5c6873' }} type="link" size='large'>
                            <Link to={`${process.env.PUBLIC_URL}/module7`}>Procument Plan</Link>
                        </Button>
                        <Button style={{ color: '#5c6873' }} type="link" size='large'>
                            <Link to={`${process.env.PUBLIC_URL}/module8`}> Contract Management</Link>
                        </Button>
                        <Button style={{ color: '#5c6873' }} type="link" size='large'>
                            <Link to={`${process.env.PUBLIC_URL}/module9`}> Complaints</Link>
                        </Button>
                        <Icon
                            type="setting"
                            style={{ position: 'absolute', right: '120px', top: '26px', fontSize: '22px', cursor: 'pointer' }}
                            onClick={this.showDrawer}
                        />
                        <Button style={{ position: 'absolute', right: '20px', top: '20px' }} type="primary" onClick={this.logoutEvent}>Logout</Button>
                    </Header>

                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: '0 50px',
                            background: '#fff',
                            // minHeight: 580,

                        }}
                    >
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Switch>
                            <Route path={`${process.env.PUBLIC_URL}/plan`} component={Dashboard}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module1`} component={Module1}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module2`} component={Module2}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module3`} component={Module3}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module4`} component={Module4}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module5`} component={Module5}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module6`} component={Module6}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module7`} component={Module7}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module8`} component={Module8}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module9`} component={Module9}></Route>
                            <Route path={`${process.env.PUBLIC_URL}/module10`} component={Module10}></Route>
                            <Redirect path={`${process.env.PUBLIC_URL}/`} to={`${process.env.PUBLIC_URL}/dashboard`}></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
            <RightDrawer drawerVisible={this.state.drawerVisible} onClose={this.onCloseDrawer}></RightDrawer>
        </div>);
    }
}

export default Home;
