import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../actions/events';
import FieldSetTemp from '../components/fieldset_temp';

class RegisterEvent extends Component {
	componentWillMount() {
		const event_id = this.props.params.id;
		this.props.fetchEvent(event_id);
	}	

	render() {
    const { handleSubmit, 
    	fields: { 
    		firstName, 
    		lastName, 
    		email, 
    		address1, 
    		address2, 
    		address3, 
    		postcode, 
    		category, 
    		phone, 
    		creditCardNo 
    	}} = this.props;

		return(
			<form>
				<p>{event.name}</p>
				<fieldset className="form-group">
					<label>First Name</label>
					<input className="form-control" {...firstName} type="text" />
				</fieldset>					
      </form>
		);
	}
}

function mapStateToProps(state) {
	return { 
		event: state.event.event
	};
}

export default reduxForm({
	form: 'register-event',
	fields: ['firstName', 'lastName', 'email', 'address1', 'address2', 'address3', 'postcode', 'category', 'phone', 'creditCardNo']
}, mapStateToProps, actions)(RegisterEvent);


// <FieldSetTemp label="First Name" fieldval={firstName} type="text" />