import { Component } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import Link from 'umi/link';
import NewHeader from '../widgt/newHeader'
const { Header, Footer, Sider, Content } = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class CmsLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: 'komolei',
            }
        }
    }
    render() {
        const { userInfo } = this.state;
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} ><span>CmsLayout</span></div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to='/cms/hi'>
                                <Icon type="pie-chart" />
                                <span>1</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to='/puzzlecard'>
                                <Icon type="pie-chart" />
                                <span>2</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>3</span></span>}
                        >
                            <SubMenu title={<span><Icon type="appstore" /><span>4 Two</span></span>}>
                                <Menu.Item key="2">
                                    <Link to='/dashboard/one'>
                                        g
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="3">6</Menu.Item>
                               
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

export default CmsLayout;