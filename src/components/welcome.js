import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events'

class WelcomePage extends Component {
	componentWillMount() {
		this.props.fetchEvents();
	}
	renderEvents(){
		const events = this.props.events;

		if (!events) {
			return(
				<div>Loading...</div>
			);
		}
		return events.map((event) => {
			return(
				<li key={event.id}>
					{event.name}, {event.date}, {event.venue}
				</li>
			);
		});
	}
	render() {
		return(
			<ul>
			{this.renderEvents()}
			</ul>
		)
	}
}


function mapStateToProps(state) {
	return {
		events: state.event.events
	};
}

export default connect(mapStateToProps, actions)(WelcomePage);