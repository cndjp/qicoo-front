import { combineReducers } from 'redux';
import questions from './questions';
import user from './user';

export default combineReducers({
  questions,
  user,
});
