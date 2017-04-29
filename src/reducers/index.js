import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import events from './event_reducer';


const rootReducer = combineReducers({
  form,
  auth,
  events
});

export default rootReducer;
