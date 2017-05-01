import axios from 'axios';
import { 
	REGISTER_EVENT, 
	FETCH_USER_EVENTS
} from './types';

// To DELETE - to mimic fetching user events from database
import { events } from './events';
import _ from 'lodash';
const mappedEvents = _.mapKeys(events, 'id');

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

export function fetchUserEvents(user_id) {
	// TO DELETE: mimic fetching user events from database
	const userEvents = [
		{reg_id: '1-user1', event_id: 1, date: 1493623412065 },
		{reg_id: '2-user1', event_id: 2, date: 1493623412065 }
	];
	
	const mappedUserEvents = userEvents.map((event) => {
		return getEventName(event.event_id);
	});
	

	return (dispatch) => {
		dispatch({
			type: FETCH_USER_EVENTS,
			payload: mappedUserEvents
		});
	}
}

function getEventName(id) {
	return {
		event_name: mappedEvents[id].name,
		event_id: id
	};
}