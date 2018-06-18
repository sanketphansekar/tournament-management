import { connect } from 'react-redux';
import Filter from './Filter';
import { changeFilter } from './actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: filter => dispatch(changeFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);
