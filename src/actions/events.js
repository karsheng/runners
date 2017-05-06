import axios from 'axios';
import { FETCH_EVENTS, FETCH_EVENT } from './types';

const ROOT_URL = 'http://localhost:3090';

export const events = [
	{id: 1, name: 'Event 1', venue: 'Kuala Lumpur', date: 1483200000000, description: 'Description 1', open: false, img: 'http://3.bp.blogspot.com/-yg1VDmgiXOE/UKuTFQmjxpI/AAAAAAAAC1Y/9GzFhs0bLr4/s400/Poster.jpg'},
	{id: 2, name: 'Event 2', venue: 'Kota Kinabalu', date: 1485964800000, description: 'Description 2', open: false, img: 'https://pbs.twimg.com/profile_images/626384126388621312/YXZ7hXzd.jpg'},
	{id: 3, name: 'Event 3', venue: 'Johor Bharu', date: 1488470400000, description: 'Description 3', open: false, img: 'https://pbs.twimg.com/profile_images/626384126388621312/YXZ7hXzd.jpg'},
	{id: 4, name: 'Event 4', venue: 'Ipoh', date: 1491235200000, description: 'Description 4', open: false, img: 'https://pbs.twimg.com/profile_images/626384126388621312/YXZ7hXzd.jpg'},
	{id: 5, name: 'Event 5', venue: 'Kota Kemuning', date: 1493913600000, description: 'Description 5', open: true, img: 'http://4.bp.blogspot.com/-OaVBubfWtWw/TqW6QbmeT6I/AAAAAAAAIdY/JXCE0cB3a2Y/s1600/smartmarathontraining.jpg'},
	{id: 6, name: 'Event 6', venue: 'Ara Damansara', date: 1496678400000, description: 'Description 6', open: true, img: 'http://www.bradfordonavon.co.uk/images/events/1345_030517193133_Scarecrow-Poster-201796990-small.png'},
	{id: 7, name: 'Event 7', venue: 'Wangsa Maju', date: 1499356800000, description: 'Description 7', open: true, img: 'http://sporthub.me/images/events/32684864b899f3e646d70cfa02fcff38.jpg'},
	{id: 8, name: 'Event 8', venue: 'Taman Melawati', date: 1502121600000, description: 'Description 8', open: true, img: 'https://images-na.ssl-images-amazon.com/images/I/41mnURlQFLL._SY300_.jpg'},
	{id: 9, name: 'Event 9', venue: 'Chow Kit', date: 1504886400000, description: 'Description 9', open: true, img: 'https://s-media-cache-ak0.pinimg.com/736x/76/d8/9c/76d89c05d1194f770ef0c18e23d28527.jpg'},
	{id: 10, name: 'Event 10', venue: 'Genting Kelang', date: 1507564800000, description: 'Description 10', open: true, img: 'https://render.fineartamerica.com/images/rendered/search/poster/images-medium-5/running-runner13-joe-hamilton.jpg'},
	{id: 11, name: 'Event 11', venue: 'Bandar Utama', date: 1510329600000	, description: 'Description 11', open: true, img: 'https://s-media-cache-ak0.pinimg.com/736x/e5/3c/57/e53c5783f5ee8911aa44395122cf711c.jpg'},
	{id: 12, name: 'Event 12', venue: 'KLCC', date: 1513008000000, description: 'Description 12', open: true, img: 'http://sporthub.me/images/events/bad1320ddbc25e83ae151075a7f5e7df.jpg'}
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