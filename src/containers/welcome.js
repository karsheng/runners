import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/events';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { GridList, GridTile } from 'material-ui/GridList';


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
						<Link to={"/events/" + event.id}>
							<p>{event.name}</p>
							<p>{event.date}</p>
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
			<div style={styles.root}>
				<GridList style={styles.gridList} cols={2.2}>
				{this.renderEvents()}
				</GridList>	
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