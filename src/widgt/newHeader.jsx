import { Component } from 'react'

import { Layout, Menu, Icon, Button, Dropdown } from 'antd';
import Link from 'umi/link';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: 'komolei',
            }
        }
    }
    render() {
        const { userInfo } = this.state;

        const menu = (
            <Menu>
                <Menu.Item>
                    <span>change pwd</span>
                </Menu.Item>
                <Menu.Item>
                    <Link to='/login'>
                        <span>sign out</span>
                    </Link>
                </Menu.Item>
            </Menu>
        );

        const moreMenu = (
            <Menu title={<span><Icon type='down' />更多平台</span>}>
                <Menu.Item  >
                    <Link to='/'><Icon type='skin' />index</Link>
                    <Link to='/cms'><Icon type='skin' />cms</Link>
                </Menu.Item>
            </Menu>
        )
        return (
            <Header style={{ background: '#001529', textAlign: 'center', padding: 0 }}>
                <Menu mode='horizontal' style={{ float: 'right', lineHeight: '64px' }} theme='dark '>
                    <Menu.Item>
                        <Dropdown overlay={menu} placement="bottomCenter">
                            <a className="ant-dropdown-link" href="#">
                                {userInfo.name} <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                    <Menu.Item>
                        <Button >导出下载</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Dropdown overlay={moreMenu} placement="bottomCenter">
                            <a className="ant-dropdown-link" href="#">
                                更多平台   <Icon type="down" />
                            </a>
                        </Dropdown>
                    </Menu.Item>
                </Menu>

            </Header>)
    }
}
