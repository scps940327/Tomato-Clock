import { connect } from 'react-redux';
import { add, sub } from '../../actions/action.js';
import ClockBody from '../presentational/ClockBody.js';

function mapStateToProps (state){
  return {
    value: state.calculator.value
  }
}

function mapDispatchToProps(dispatch){
  return {
    onClickAdd: () => {
      dispatch(add());
    },
    onClickSub: () =>{
      dispatch(sub());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClockBody);