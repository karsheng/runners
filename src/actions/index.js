import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

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

			});
	}

}