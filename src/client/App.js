import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import Main from './components/Main';
import './app.less';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <Link href="/" to="/">
                Home
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link href="/scoreboard" to="/scoreboard">
                Score Board
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '30px 30px 0 30px' }}>
          <div style={{ padding: 24, minHeight: '70vh' }}>
            <Main />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Tournament Management ©2018 Created by Sanket Phansekar
        </Footer>
      </Layout>
    );
  }
}

App.propTypes = {};
