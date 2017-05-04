import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserEvents } from '../actions/user';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';



const style = {
  height: '100%',
  width: '100%',
  margin: '0 auto',
  textAlign: 'center',
  display: 'inline-block',
};

class UserProfile extends Component {
	renderUserInterests(interests) {
		return interests.map((interest) => {
			return(
				<Chip style={{margin: '4px auto'}} key={interest}>{interest}</Chip>
			);
		});
	}

	renderUpcomingEvents() {
		const { user_events } = this.props;
		return _.map(user_events, (event) => {
			if (event.open) {
				return(
					<Link to={"/events/" + event.event_id} key={event.event_id}>
						<li>{event.event_name}</li>
					</Link>
				);
			}
		});
	}

	renderClosedEvents() {
		const { user_events } = this.props;
		return _.map(user_events, (event) => {
			if (!event.open) {
				return(
					<Link to={"/events/" + event.event_id} key={event.event_id}>
						<li>{event.event_name}</li>
					</Link>
				);
			}
		});
	}	

	render() {
		const { user } = this.props;
		return(
			<div>
				<h2>Profile</h2>
    		<Paper style={style} zDepth={5} >
    			<br/>
        	<Avatar
          	src="https://scontent-kut2-1.cdninstagram.com/t51.2885-19/s150x150/15275658_1838002483152296_2565393088411336704_a.jpg"
          	size={150}
          	style={{margin: 5}}
        	/>
					<h3>{user.firstName + " " + user.lastName}</h3>
					<br/>
					<h4>Address</h4>
					<p>{user.address1}</p>
					<p>{user.address2}</p>
					<p>{user.address3}</p>
					<br/>
					<h4>Interest</h4>
					{this.renderUserInterests(user.interests)}
					<br/>
					<br/>
    		</Paper>
				<div>
					<h4>Upcoming Events</h4>
					<ul>
						{this.renderUpcomingEvents()}	
					</ul>
				</div>
				<div>
					<h4>Closed Events</h4>
					<ul>
						{this.renderClosedEvents()}	
					</ul>
				</div>    		
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user.user_info,
		user_events: state.user_events
	};
}

export default connect(mapStateToProps, { fetchUserEvents })(UserProfile);