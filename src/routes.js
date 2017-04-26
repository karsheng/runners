import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import WelcomePage from './components/welcome';
import EventShow from './components/event_show';


export default (
	<Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
		<Route path="signin" component={Signin} />
		<Route path="signout" component={Signout} />
		<Route path="signup" component={Signup} />
    <Route path="feature" component={RequireAuth(Feature)} />
    <Route path="events/:id" component={EventShow} />
	</Route>
);			