import axios from 'axios';
import { REGISTER_EVENT } from './types';

const ROOT_URL = 'http://localhost:3090';


export function registerEvent(formProps, cb) {
	// post request to server and return regId
	const regEvent = {
		reg_id: formProps.eventId + '-user1',
		event_id: formProps.eventId,
		date: Date.now()
	};

	return (dispatch) => {
		dispatch({
			type: REGISTER_EVENT,
			payload: regEvent 
		});

		cb();
	}
}