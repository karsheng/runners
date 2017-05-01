import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserEvents } from '../actions/user';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class UserProfile extends Component {
	componentDidMount() {
		const { id } = this.props.user;
		this.props.fetchUserEvents(id);
	}

	renderUserInterests(interests) {
		return interests.map((interest) => {
			return(
				<li key={interest}>{interest}</li>
			);
		});
	}

	renderUserEvents() {
		const { user_events } = this.props;
		return _.map(user_events, (event) => {
			return(
				<Link to={"/events/" + event.event_id} key={event.event_id}>
					<li >{event.event_name}</li>
				</Link>
			);
		});

	}

	render() {
		const { user } = this.props;
		return(
			<div>
				<div>
					<img className="img-circle" src="https://scontent-kut2-1.cdninstagram.com/t51.2885-19/s150x150/15275658_1838002483152296_2565393088411336704_a.jpg" />
					<h3>User Info</h3>
					<p>{user.firstName + " " + user.lastName}</p>
					<h4>Address</h4>
					<p>{user.address1}</p>
					<p>{user.address2}</p>
					<p>{user.address3}</p>
					<h4>Interest</h4>
					<ul>
						{this.renderUserInterests(user.interests)}
					</ul>
				</div>
				<div>
					<h3>Registered Events</h3>
					<ul>
						{this.renderUserEvents()}
					</ul>
				</div>
				
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user.user_info,
		user_events: state.user_events,
	};
}

export default connect(mapStateToProps, { fetchUserEvents })(UserProfile);