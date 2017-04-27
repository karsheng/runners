import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router';

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
				<Link to={"events/" + event.id} key={event.id}>
				<div className="card card-block">
					<h4 className="card-title">{event.name}</h4>
					<p className="card-text">{event.date}</p>
					<p>{event.venue}</p>
				</div>
				</Link>
			);
		});
	}
	render() {
		return(
			<div className="event-list">
			{this.renderEvents()}
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		events: state.event.events
	};
}

export default connect(mapStateToProps, actions)(WelcomePage);