import React, { Component } from 'react';
import { Table } from 'antd';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataSource = [
      {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street'
      },
      {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street'
      }
    ];

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
      }
    ];

    return <Table dataSource={dataSource} columns={columns} />;
  }
}

export default Scoreboard;
