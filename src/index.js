import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './app';
import { AUTH_USER, FETCH_USER_INFO } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
export const userInfo = {
		id: '1',
		firstName: 'Kar Sheng',
		lastName: 'Lee',
		gender: 'male',	
		address1: '16 The Breezeway',
		address2: 'Persiaran Residen 3, Desa Parkcity',
		address3: 'Kuala Lumpur',
		postcode: '52200',
		interests: ['5km', '10km', 'Half-marathon', 'Full-marathon']
	};

// if we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });

  // TODO: call function to fetch user info
	// TO DELETE - mimic fetch user info from database
  store.dispatch({
  	type: FETCH_USER_INFO,
  	payload: userInfo
  });
}

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter>
  		<App />
  	</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
