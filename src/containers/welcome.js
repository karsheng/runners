import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { GridList, GridTile } from 'material-ui/GridList';
import Slider from 'react-slick';
import Divider from 'material-ui/Divider';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 100,
  arrows: false
};

class WelcomePage extends Component {
	componentWillMount() {
		this.props.fetchEvents();
	}
	renderEvents(){
		const events =  _.map(this.props.events, (event) => {
			if (event.open) {
				return(
					<GridTile
						key={event.id}
						titleStyle={styles.titleStyle}
						containerElement={<Link to={"/events/" + event.id}></Link>}
					>
						<img src="http://placehold.it/220x300" alt=""/>
							<p>{event.name}</p>
							<p>{event.formattedDate}</p>
							<p>{event.venue}</p>
					</GridTile>
				);				
			}
		});

		return _.without(events, undefined);
	}
	render() {
		return(
			<div>
				<Slider {...settings}>
	        <div className="main-slider"><img src="http://placehold.it/1080x500" alt=""/></div>
	        <div className="main-slider"><img src="http://placehold.it/1080x500" alt=""/></div>
	        <div className="main-slider"><img src="http://placehold.it/1080x500" alt=""/></div>
	        <div className="main-slider"><img src="http://placehold.it/1080x500" alt=""/></div>
	      </Slider>	
			<Divider />
			<br/>
			<br/>
				<h2>Events</h2>
				<div style={styles.root}>
					<GridList style={styles.gridList} cols={1.1} cellHeight="auto">
					{this.renderEvents()}
					</GridList>	
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		events: state.events
	};
}

export default connect(mapStateToProps, actions)(WelcomePage);