import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';


class EventShow extends Component {
	renderRegisterButton() {
		const { event, user_events } = this.props;
		if (event.open && !user_events[event.id]) {
			return(
				<Link to={"/reg-event/" + event.id}>
					<button className="btn btn-primary">Register</button>
				</Link>
			);
		}
	}
	componentDidMount() {
    const { id } = this.props.match.params;
		this.props.fetchEvent(id);
	}
	render() {
		const { event } = this.props;
		if (!event) {
			return(
				<div>
					Loading...
				</div>
			);
		}
		return (
			<div>
				<p>{event.name}</p>
				<p>{event.description}</p>
				{this.renderRegisterButton()}
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		event: state.events[ownProps.match.params.id],
		user_events: state.user_events
	};
}

export default connect(mapStateToProps, actions)(EventShow);