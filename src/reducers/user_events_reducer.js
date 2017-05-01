import _ from 'lodash';
import { 
	FETCH_USER_EVENTS,
	REGISTER_EVENT
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_USER_EVENTS:
			return _.mapKeys(action.payload, 'event_id');
		case REGISTER_EVENT:
			return { ...state, [action.payload.event_id]: action.payload };
		
	}

	return state;
}