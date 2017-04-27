import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';


class EventShow extends Component {

	componentWillMount() {
		const event_id = this.props.params.id;
		this.props.fetchEvent(event_id);
	}
	render() {
		return(
		<div>
			<p>{event.name}</p>
			<p>{event.description}</p>
			<button className="btn btn-primary">Register</button>
		</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		event: state.event.event
	}
}

export default connect(mapStateToProps, actions)(EventShow);