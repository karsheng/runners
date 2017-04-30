import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';


class EventShow extends Component {
	componentDidMount() {
    const { id } = this.props.match.params;
		this.props.fetchEvent(id);
	}
	render() {
		const { event } = this.props;

		return (
			<div>
				<p>{event.name}</p>
				<p>{event.description}</p>
				<Link to={"/reg-event/" + event.id}>
					<button className="btn btn-primary">Register</button>
				</Link>
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