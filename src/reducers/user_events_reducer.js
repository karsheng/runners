import { 
	REGISTER_EVENT
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case REGISTER_EVENT:
			return { ...state, [action.payload.reg_id]: action.payload };
	}

	return state;
}