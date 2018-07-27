import moment from 'moment';

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

export { getFilteredMatches };
