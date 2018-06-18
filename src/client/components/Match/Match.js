import React from 'react';
import moment from 'moment';
import { Card, Row, Col, Form, InputNumber, Button, Radio } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;

const Match = ({ teamA, teamB, date }) => (
  <Card
    extra={moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
    title={`${teamA} vs ${teamB}`}
    style={{ width: '100%', marginBottom: '20px' }}
  >
    <Form>
      <Row gutter={24}>
        <Col span={6}>Sanket Phansekar</Col>
        <Col span={5}>
          <FormItem>
            <InputNumber placeholder={teamA} />
          </FormItem>
        </Col>
        {/* <Col span={8}>
          <FormItem>
            <RadioGroup>
              <RadioButton value="a">{teamA}</RadioButton>
              <RadioButton value="b">{teamB}</RadioButton>
            </RadioGroup>
          </FormItem>
        </Col> */}
        <Col span={5}>
          <FormItem>
            <InputNumber placeholder={teamB} />
          </FormItem>
        </Col>
      </Row>
      <Button
        disabled={!moment.utc(date).isBetween(moment().startOf('day'), moment().endOf('day'))}
        type="primary"
        style={{ alignSelf: 'center' }}
      >
        Submit
      </Button>
    </Form>
  </Card>
);

export default Form.create()(Match);
