import { combineReducers } from 'redux';
import { PLUS, MINUS } from '../actions/action.js';

const initialData = {
  value : 0
}

const initialMemberData = {
  name: '訪客'
}

function calculator(state = initialData, action){
  switch(action.type){
    case PLUS:
        return Object.assign({},state,{
            value : state.value + action.num
        });
    case MINUS:
        return Object.assign({},state,{
            value : state.value - action.num
        });
    default:
        return state;
  }
}

const calculatorApp = combineReducers({
  calculator
});

export default calculatorApp;