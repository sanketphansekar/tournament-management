import React, { Component } from 'react';
import moment from 'moment';
import { Card, Row, Col, InputNumber, Button, Form, message } from 'antd';
import PropTypes from 'prop-types';
import { each, findIndex } from 'lodash';

import { saveMatchScores } from '../../util/api';

const FormItem = Form.Item;

class Match extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveScoreInDb(values) {
    const { id: matchId, teamAId, teamBId } = this.props;
    let saveArr = [];

    each(values, (value, key) => {
      // [0] index will have userId and [1] index will have respective
      // team score eg. ${id}#teamAScore : 1
      const [userId, teamName] = key.split('#');
      const index = findIndex(saveArr, { userId });
      if (index === -1) {
        saveArr.push({
          matchId,
          userId,
          [`${teamName}Score`]: value
        });
      } else {
        saveArr[index] = {
          ...saveArr[index],
          [`${teamName}Score`]: value
        };
      }
    });

    saveArr = saveArr.map(i => (i.teamAScore > i.teamBScore
      ? {
        ...i,
        winnerTeamId: teamAId
      }
      : {
        ...i,
        winnerTeamId: teamBId
      }));

    const hide = message.loading('Action in progress..', 0);

    saveMatchScores(saveArr).then(() => {
      setTimeout(() => {
        hide();
        message.success('Saved successfully!');
      });
    });
  }

  render() {
    const {
      teamA, teamB, date, users
    } = this.props;

    const { getFieldDecorator } = this.props.form;

    return (
      <Card
        extra={moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        title={`${teamA} vs ${teamB}`}
        style={{ width: '100%', marginBottom: '20px' }}
      >
        <Form
          onSubmit={(e) => {
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
          {users.map((user) => {
            const prefix = `${user.id}`;
            return (
              <div key={user.id}>
                <Row gutter={24}>
                  <Col span={8}>{user.name}</Col>
                  <Col span={8}>
                    <FormItem>
                      {getFieldDecorator(`${prefix}#teamA`, {
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
                      })(<InputNumber
                        style={{ width: '100%' }}
                        min={0}
                        max={50}
                        placeholder={teamA}
                      />)}
                    </FormItem>
                  </Col>
                  <Col span={8}>
                    <FormItem>
                      {getFieldDecorator(`${prefix}#teamB`, {
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
                <hr />
              </div>
            );
          })}

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
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired
};

export default Form.create()(Match);
