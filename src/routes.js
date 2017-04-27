import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Signin from './containers/auth/signin';
import Signout from './containers/auth/signout';
import Signup from './containers/auth/signup';
import Feature from './containers/feature';
import RequireAuth from './containers/auth/require_auth';
import WelcomePage from './containers/welcome';
import EventShow from './containers/event_show';
import RegisterEvent from './containers/register_event';


export default (
	<Route path="/" component={App}>
    <IndexRoute component={WelcomePage} />
		<Route path="signin" component={Signin} />
		<Route path="signout" component={Signout} />
		<Route path="signup" component={Signup} />
    <Route path="feature" component={RequireAuth(Feature)} />
    <Route path="events/:id" component={EventShow} />
    <Route path="reg-event/:id" component={RegisterEvent} />
	</Route>
);			