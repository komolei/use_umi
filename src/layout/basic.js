import { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import Link from 'umi/link';
import NewHeader from '../widgt/newHeader'
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

export default class BasicLayout extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} ><span>BasicLayout</span></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to='/helloworld'>
                                <Icon type="pie-chart" />
                                <span>Helloworld</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/puzzlecard'>
                                <Icon type="pie-chart" />
                                <span>puzzlecard</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                        >
                            <SubMenu title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                                <Menu.Item key="2">
                                    <Link to='/dashboard/one'>
                                        分析页
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">监控页</Menu.Item>
                                <Menu.Item key="4">工作台</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout >
                   <NewHeader/>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}