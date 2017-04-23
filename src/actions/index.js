import axios from 'axios';
import { browserHistory } from 'react-router';
import { 
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from './types';

const ROOT_URL = 'http://localhost:3090'; 

export function signinUser({ email, password }) {
	// how we get access to the dispatch function
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// if request is good
				// - update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - save the JWT token to localStorage
				localStorage.setItem('token', response.data.token);
				// - redirect to the route '/feature'
				browserHistory.push('/feature');
			})
			.catch(() => {
				// if request is bad
				// - show an error to the user
				dispatch(authError('Bad Sign In Info'));
			});
	}

}

export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signupUser({ email, password }) {
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				// if request is good
				// - update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - save the JWT token to localStorage
				localStorage.setItem('token', response.data.token);
				// - redirect to the route '/feature'
				browserHistory.push('/feature');
			})
			.catch((response) => {
				// if request is bad
				// - show an error to the user
				dispatch(authError(response.data.error));
			});
	}

}

export function signoutUser() {
	localStorage.removeItem('token');

	return { type: UNAUTH_USER };
}

