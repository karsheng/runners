import axios from 'axios';

const ROOT_URL = 'http://localhost:3090'; 

export function signinUser({ email, password }) {
	// how we get access to the dispatch function
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signin`, { email, password });
		// if request is good
		// - update state to indicate user is authenticated
		// - save the JWT token
		// - redirect to the route '/feature'


		// if request is bad
		// - show an error to the user
	}

}