import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
class HomeNav extends Component {
    constructor(props) {
        super(props);
        this.state = { current: 'mail' }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (<div>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="mail">
                    <Icon type="home" />
                   Home
                </Menu.Item>
                <Menu.Item key="plan">
                    <Icon type="project" />
                  Procument plan
                </Menu.Item>
                <Menu.Item key="management">
                    <Icon type="mail" />
                    Contract Management
                </Menu.Item>
                <Menu.Item key="complains">
                    <Icon type="frown" />
                   Complains
                </Menu.Item>
                {/* <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                            <Icon type="setting" />
                           Contract Management
                         </span>
                    }
                >
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu> */}
                {/* <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
          </a>
                </Menu.Item> */}
            </Menu>
        </div>);
    }
}

export default HomeNav;