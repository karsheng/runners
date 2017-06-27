import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';
import CircularProgress from 'material-ui/CircularProgress';
import ReactSVG from 'react-svg';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import GoogleMap from '../components/google_map';


class EventShow extends Component {
	renderRegisterButton(event, user_events) {
		if (event.open && !user_events[event.id]) {
			return(
				<FlatButton primary={true} containerElement={<Link to={"/reg-event/" + event.id} />} >Register</FlatButton>
			);
		} else {
			return(
				<FlatButton primary={true} disabled={true}>Registered</FlatButton>
			);
		}
	}
	renderAirbnbButton(venue) {
		return(
			<IconButton
				style={{padding: 0}}
				iconStyle={{width: 36, height: 36}}
				href={"https://airbnb.com/s/" + venue}
				target="_blank"
			>
				<ReactSVG 
					path="/src/svg/airbnb.svg"
				/>
			</IconButton>
		)
	}
	renderBookingButton(venue) {
		return(
			<IconButton
				style={{padding: 0}}
				iconStyle={{width: 60, height: 36}}
				href={"https://www.booking.com/search.html?ss=" + venue}
				target="_blank"
			>
				<ReactSVG 
					path="/src/svg/booking.svg"
				/>
			</IconButton>
		)	
	}

	componentDidMount() {
    const { id } = this.props.match.params;
		this.props.fetchEvent(id);
	}
	render() {
		const { event, user_events } = this.props;
		if (!event) {
			return(
				<CircularProgress />
			);
		}
		return (
			<Card>
				<CardMedia>
					<img src={event.main_img} alt=""/>
				</CardMedia>
				<CardTitle title={event.name} subtitle={event.venue + '  |  ' + event.formattedDate} />
				<CardText>
					{event.description}
				</CardText>
				<CardActions>
					{this.renderRegisterButton(event, user_events)}	
					{this.renderAirbnbButton(event.venue)}	
					{this.renderBookingButton(event.venue)}
				</CardActions>
				<CardMedia>
					<GoogleMap lat={event.lat} lng={event.lng} />
				</CardMedia>
			</Card>
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