import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Match from '../Match/Match';
import Filter from '../Filter/index';

import { loadMatches } from './actions';

import { getUsers } from '../../util/api';
import { getFilteredMatches } from '../../util/storeDataHelper';

function mapStateToProps(state) {
  const { matches } = state;
  return {
    matches: getFilteredMatches(matches, state.filter)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMatches: () => {
      dispatch(loadMatches())
    }
  };
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      predictedScores: []
    };
  }

  componentDidMount() {
    this.props.loadMatches();

    getUsers().then((users) => {
      this.setState({
        users,
        predictedScores: []
      });
    });
  }

  render() {
    const { matches } = this.props;
    const { users } = this.state;
    return (
      <div>
        <Filter />
        <Row gutter={48}>
          {matches.map((match) => {
            const { teamA, teamB } = match;
            match = {
              ...match,
              teamA: teamA ? teamA.name : 'TBD',
              teamB: teamB ? teamB.name : 'TBD',
              teamAId: teamA ? teamA.id : null,
              teamBId: teamB ? teamB.id : null
            };
            return (
              <Col key={match.id} span={12}>
                <Match {...match} users={users} />
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
