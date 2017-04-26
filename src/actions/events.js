import axios from 'axios';
import { FETCH_EVENTS } from './types';

const ROOT_URL = 'http://localhost:3090';

export function fetchEvents() {
	const events = [
		{id: 1, name: 'Event 1', venue: 'Venue 1', date: '01-01-2017', description: 'Description 1'},
		{id: 2, name: 'Event 2', venue: 'Venue 2', date: '02-02-2017', description: 'Description 2'},
		{id: 3, name: 'Event 3', venue: 'Venue 3', date: '03-03-2017', description: 'Description 3'},
		{id: 4, name: 'Event 4', venue: 'Venue 4', date: '04-04-2017', description: 'Description 4'}
	];
	return (dispatch) => {
		dispatch({
			type: FETCH_EVENTS,
			payload: events
		});
	}

}