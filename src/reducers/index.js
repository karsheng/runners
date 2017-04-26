import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import event from './event_reducer';


const rootReducer = combineReducers({
  form,
  auth,
  event
});

export default rootReducer;
