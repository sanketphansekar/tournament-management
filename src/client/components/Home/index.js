import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { find } from 'lodash';

import Match from '../Match/Match';
import Filter from '../Filter/index';

import { getUsers } from '../../util/api';

function getFilteredMatches(matches, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return matches;
    case 'TODAY':
      return matches.filter(item =>
        moment.utc(item.date).isBetween(moment().startOf('day'), moment().endOf('day'))
      );
    case 'PAST':
      return matches.filter(item => moment.utc(item.date).isBefore(moment()));
    case 'FUTURE':
      return matches.filter(item => moment.utc(item.date).isAfter(moment()));
    default:
      return matches;
  }
}

function mapStateToProps(state) {
  const { matches } = state;
  return {
    matches: getFilteredMatches(matches, state.filter)
  };
}

function mapDispatchToProps() {
  return {};
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      predictedScores: []
    };
  }

  componentDidMount = () => {
    let { matches } = this.props;
    getUsers().then(users => {
      this.setState({
        users,
        predictedScores: []
      });
    });
  };

  updatePredictedSocre = (userId, matchId, score, team) => {
    console.log(userId, matchId, score, team);
    let { matches } = this.props;
    let { predictedScores } = this.state;
    let { teamA, teamB } = find(matches, { id: matchId });
    let isPresent = find(predictedScores, { matchId, userId });
    let teamChosen = `${team}Score`;
    if (!isPresent) {
      predictedScores = [
        ...predictedScores,
        {
          matchId,
          userId,
          [teamChosen]: score
        }
      ];
    } else {
      predictedScores = predictedScores.map(i => {
        if (i.userId === userId && i.matchId === matchId) {
          return {
            ...i,
            [teamChosen]: score,
            winnerTeamId:
              team === 'teamA'
                ? score > teamB
                  ? teamA.id
                  : teamB.id
                : score > teamA
                  ? teamB.id
                  : teamA.id
          };
        } else {
          return i;
        }
      });
    }

    console.log(predictedScores);

    this.setState({
      predictedScores: predictedScores
    });
  };

  render() {
    const { matches } = this.props;
    const { users } = this.state;
    return (
      <div>
        <Filter />
        <Row gutter={48}>
          {matches.map(match => {
            const { teamA, teamB } = match;
            match = {
              ...match,
              teamA: teamA ? teamA.name : 'TBD',
              teamB: teamB ? teamB.name : 'TBD'
            };
            return (
              <Col key={match.id} span={12}>
                <Match {...match} users={users} updatePredictedSocre={this.updatePredictedSocre} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

Home.defaultProps = {
  matches: []
};

Home.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
