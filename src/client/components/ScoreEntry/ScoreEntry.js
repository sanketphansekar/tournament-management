import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import { connect } from 'react-redux';

import { getFilteredMatches } from '../../util/storeDataHelper';

import Filter from '../Filter';
import MatchScore from '../MatchScore/MatchScore';

function mapStateToProps(state) {
  const { matches } = state;
  return {
    matches: getFilteredMatches(matches, state.filter)
  };
}

function mapDispatchToProps() {
  return {};
}

class ScoreEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { matches } = this.props;
    return (
      <div>
        <Filter />
        <Row gutter={48}>
          {matches.map((match) => {
            const { teamA, teamB } = match;
            const temp = {
              ...match,
              teamA: teamA ? teamA.name : 'TBD',
              teamB: teamB ? teamB.name : 'TBD',
              teamAId: teamA ? teamA.id : null,
              teamBId: teamB ? teamB.id : null
            };
            return (
              <Col key={match.id} span={12}>
                <MatchScore {...temp} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

ScoreEntry.propTypes = {
  matches: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreEntry);
