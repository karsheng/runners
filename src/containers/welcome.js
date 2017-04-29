import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class WelcomePage extends Component {
	componentWillMount() {
		this.props.fetchEvents();
	}
	renderEvents(){
		return _.map(this.props.events, (event) => {
			return(
				<Link to={"/events/" + event.id} key={event.id}>
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
		events: state.events
	};
}

export default connect(mapStateToProps, actions)(WelcomePage);