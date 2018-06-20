import React from 'react';
import moment from 'moment';
import { Card, Row, Col, InputNumber, Button } from 'antd';
import PropTypes from 'prop-types';

const Match = ({
  id: matchId, teamA, teamB, date, users, updatePredictedSocre
}) => (
  <Card
    extra={moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')}
    title={`${teamA} vs ${teamB}`}
    style={{ width: '100%', marginBottom: '20px' }}
  >
    {users.map(user => (
      <div key={user.id}>
        <Row gutter={24}>
          <Col span={8}>{user.name}</Col>
          <Col span={8}>
            <InputNumber
              min={0}
              placeholder={teamA}
              onChange={(value) => {
                updatePredictedSocre(user.id, matchId, value, 'teamA');
              }}
            />
          </Col>
          <Col span={8}>
            <InputNumber
              min={0}
              placeholder={teamB}
              onChange={(value) => {
                updatePredictedSocre(user.id, matchId, value, 'teamB');
              }}
            />
          </Col>
        </Row>
        <hr />
      </div>
    ))}

    <Button type="primary" style={{ alignSelf: 'center' }}>
      Submit
    </Button>
  </Card>
);

Match.propTypes = {
  teamA: PropTypes.string.isRequired,
  teamB: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  users: PropTypes.objectOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  updatePredictedSocre: PropTypes.func.isRequired
};

export default Match;
