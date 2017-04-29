import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';


class EventShow extends Component {

	componentDidMount() {
    const { id } = this.props.match.params;
		this.props.fetchEvent(id);
	}
	render() {
		const { event } = this.props

		return (
			<div>
				<p>{event.name}</p>
				<p>{event.description}</p>
				<button className="btn btn-primary">Register</button>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		event: state.events[ownProps.match.params.id]
	};
}

export default connect(mapStateToProps, actions)(EventShow);