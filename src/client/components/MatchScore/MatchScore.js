import React, { Component } from 'react';
import moment from 'moment';
import { Card, Row, Col, InputNumber, Button, Form, message } from 'antd';
import PropTypes from 'prop-types';

import { saveActualMatchScores } from '../../util/api';

const FormItem = Form.Item;

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveScoreInDb = values => {
    let { id: matchId } = this.props;
    let saveValues = {
      ...values,
      matchId
    };

    const hide = message.loading('Action in progress..', 0);

    saveActualMatchScores(saveValues).then(() => {
      setTimeout(() => {
        hide();
        message.success('Saved successfully!');
      });
    });
  };

  render() {
    const { teamA, teamB, date } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Card
        extra={moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        title={`${teamA} vs ${teamB}`}
        style={{ width: '100%', marginBottom: '20px' }}
      >
        <Form
          onSubmit={e => {
            e.preventDefault();
            this.props.form.validateFieldsAndScroll((err, values) => {
              if (err) {
                message.error(`Match: ${teamA} vs ${teamB} details not filled`);
              } else {
                this.saveScoreInDb(values);
              }
            });
          }}
        >
          <Row gutter={24}>
            <Col span={8}>
              <FormItem>
                {getFieldDecorator(`teamAScore`, {
                  rules: [
                    {
                      type: 'integer',
                      message: 'Invalid score'
                    },
                    {
                      required: true,
                      message: 'Score not filled'
                    }
                  ]
                })(<InputNumber style={{ width: '100%' }} min={0} max={50} placeholder={teamA} />)}
              </FormItem>
            </Col>
            <Col span={8}>
              <FormItem>
                {getFieldDecorator(`teamBScore`, {
                  rules: [
                    {
                      type: 'integer',
                      message: 'Invalid score'
                    },
                    {
                      required: true,
                      message: 'Score not filled'
                    }
                  ]
                })(<InputNumber style={{ width: '100%' }} placeholder={teamB} />)}
              </FormItem>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" style={{ alignSelf: 'center' }}>
            Submit
          </Button>
        </Form>
      </Card>
    );
  }
}

Match.propTypes = {
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired
};

export default Form.create()(Match);
