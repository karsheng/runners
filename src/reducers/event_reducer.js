import { 
	FETCH_EVENTS,
	FETCH_EVENT
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_EVENTS:
			return { ...state, events: action.payload };
		case FETCH_EVENT:
			return { ...state, event: action.payload };			
	}

	return state;
}