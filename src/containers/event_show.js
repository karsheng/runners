import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import ReactSVG from 'react-svg';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

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
				<CircularProgress />
			);
		}
		return (
			<div>
				<p>{event.name}</p>
				<p>{event.description}</p>
				{this.renderRegisterButton()}
		    <IconButton 
		    	iconStyle={{width: 36, height: 36}}
		    	href="https://airbnb.com/s/kuala-lumpur"
      		target="_blank"
		    >
		    	<ReactSVG 
						path="/src/svg/airbnb.svg"
					/>
		    </IconButton>				
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