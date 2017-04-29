import axios from 'axios';
import { 
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_MESSAGE
} from './types';

const ROOT_URL = 'http://localhost:3090'; 

export function signinUser({ email, password }, cb) {
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

				cb();
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

export function signupUser({ email, password }, cb) {
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				// if request is good
				// - update state to indicate user is authenticated
				dispatch({ type: AUTH_USER });
				// - save the JWT token to localStorage
				localStorage.setItem('token', response.data.token);
				
				cb();
				
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

export function fetchMessage() {
	return function(dispatch) {
		axios.get(ROOT_URL, {
			headers: { authorization: localStorage.getItem('token') }
		})
			.then(response => {
				dispatch( {
					type: FETCH_MESSAGE,
					payload: response.data.message
				})
			});
	}
}


