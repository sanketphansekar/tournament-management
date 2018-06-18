import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Match from '../Match/Match';
import Filter from '../Filter/index';

function getFilteredMatches(matches, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return matches;
    case 'TODAY':
      return matches.filter(item =>
        moment.utc(item.date).isBetween(moment().startOf('day'), moment().endOf('day')));
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
            match = {
              ...match,
              teamA: teamA ? teamA.name : 'TBD',
              teamB: teamB ? teamB.name : 'TBD'
            };
            return (
              <Col key={match.id} span={12}>
                <Match {...match} />
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
