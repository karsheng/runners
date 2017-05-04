import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions'; 
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';


class Signin extends Component {

	renderField(field) {
		const { meta: { touched, error } } = field;

		return(
			<TextField hintText={field.label}
		    floatingLabelText={field.label}
		    type={field.type}
		    errorText={touched && error}
		    {...field.input}
		  />			
		);
	}


	handleFormSubmit({ email, password }) {
		// Need to do something to sign user in
		this.props.signinUser({ email, password }, () => {
      this.props.history.push('/feature');			
		});
	}

	renderAlert() {
		if (this.props.errorMessage) {
			return (
				<div className="alert alert-danger">
					<strong>Opps!</strong> {this.props.errorMessage}
				</div>
			);
		}
	}

	render() {
		const { handleSubmit, pristine, reset, submitting} = this.props;

		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<Field
					label="Email"
					name="email"
					type="text"
					component={this.renderField}
				/>
				<br/>
				<Field
					label="Password"
					name="password"
					type="password"
					component={this.renderField}
				/>
				<br/>
				{this.renderAlert()}
				<button action="submit" disabled={pristine || submitting} >Sign in</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { errorMessage: state.auth.error };
}

export default reduxForm({
	form: 'signin'
})(
	connect(mapStateToProps, actions)(Signin)
);



