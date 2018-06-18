import React from 'react';
import { Row, Col, Radio } from 'antd';
import PropTypes from 'prop-types';

const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const Filter = ({ onChangeFilter }) => (
  <Row style={{ marginBottom: '30px' }}>
    <Col span={8} offset={8}>
      <RadioGroup
        defaultValue="TODAY"
        onChange={(e) => {
          onChangeFilter(e.target.value);
        }}
      >
        <RadioButton value="SHOW_ALL">Show All</RadioButton>
        <RadioButton value="TODAY">Today</RadioButton>
        <RadioButton value="FUTURE">Future</RadioButton>
        <RadioButton value="PAST">Past</RadioButton>
      </RadioGroup>
    </Col>
  </Row>
);

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired
};

export default Filter;
