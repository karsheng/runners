import axios from 'axios';
import { FETCH_EVENTS, FETCH_EVENT } from './types';

const ROOT_URL = 'http://localhost:3090';

export const events = [
	{id: 1, name: 'Event 1', venue: 'Kuala Lumpur', date: 1483200000000, description: 'Description 1', open: false},
	{id: 2, name: 'Event 2', venue: 'Kota Kinabalu', date: 1485964800000, description: 'Description 2', open: false},
	{id: 3, name: 'Event 3', venue: 'Johor Bharu', date: 1488470400000, description: 'Description 3', open: false},
	{id: 4, name: 'Event 4', venue: 'Ipoh', date: 1491235200000, description: 'Description 4', open: false},
	{id: 5, name: 'Event 5', venue: 'Kota Kemuning', date: 1493913600000, description: 'Description 5', open: true},
	{id: 6, name: 'Event 6', venue: 'Ara Damansara', date: 1496678400000, description: 'Description 6', open: true},
	{id: 7, name: 'Event 7', venue: 'Wangsa Maju', date: 1499356800000, description: 'Description 7', open: true},
	{id: 8, name: 'Event 8', venue: 'Taman Melawati', date: 1502121600000, description: 'Description 8', open: true},
	{id: 9, name: 'Event 9', venue: 'Chow Kit', date: 1504886400000, description: 'Description 9', open: true},
	{id: 10, name: 'Event 10', venue: 'Genting Kelang', date: 1507564800000, description: 'Description 10', open: true},
	{id: 11, name: 'Event 11', venue: 'Bandar Utama', date: 1510329600000	, description: 'Description 11', open: true},
	{id: 12, name: 'Event 12', venue: 'KLCC', date: 1513008000000, description: 'Description 12', open: true}
];

export function fetchEvents() {
	const formattedEvents = events.map((event) => {
		event.formattedDate = formatDate(event.date);
		return event;
	});

	return (dispatch) => {
		dispatch({
			type: FETCH_EVENTS,
			payload: formattedEvents
		});
	}

}

export function fetchEvent(event_id) {
	event = events.find((event) => {
		return event.id == event_id;
	});
	return (dispatch) => {
		dispatch({
			type: FETCH_EVENT,
			payload: event
		});
	}	
}

function formatDate(timestamp) {
	const date = new Date(timestamp);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const formattedDate = day + '-' + month + '-' +  year;
	return formattedDate;
}