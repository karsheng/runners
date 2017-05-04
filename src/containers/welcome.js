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
    overflowX: 'auto'
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
  autoplaySpeed: 100
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
						title={event.name}
						titleStyle={styles.titleStyle}
						titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
					>
						<img src="http://placehold.it/220x300" alt=""/>
						<Link to={"/events/" + event.id}>
							<p>{event.name}</p>
							<p>{event.formattedDate}</p>
							<p>{event.venue}</p>
						</Link>
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
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
        <div><img src="http://placehold.it/1000x500" alt=""/></div>
      </Slider>	
			<Divider />
			<br/>
			<br/>
				<h2>Event</h2>
				<div style={styles.root}>
					<GridList style={styles.gridList} cols={2.2} cellHeight="auto">
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