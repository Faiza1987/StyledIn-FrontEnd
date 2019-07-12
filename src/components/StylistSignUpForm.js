import React, { Component } from 'react';
import './StylistSignUpForm.css';
import PropTypes from 'prop-types';
import { thisTypeAnnotation } from '@babel/types';


class StylistSignUpForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
			experience_in_years: '',
			licenses: '',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
			specializations: '',
		}
	}

	validations = {
		first_name: /.+/,
		last_name: /.+/,
		phone_number: /.+/,
		email: /.+/,
		experience_in_years: /.+/,
		licenses: /.+/,
		photo1: /.+/,
		photo2: /.+/,
		photo3: /.+/,
		photo4: /.+/,
		photo5: /.+/,
		photo6: /.+/,
	}

	fieldValid = (fieldName) => {
		return this.validations[fieldName].test(this.state[fieldName]);
	}

	onChangeHandler = (event) => {
		const newState = {}
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	handleSubmit = (event) => {
		event.preventDefault();

		let allFieldsValid = true;
		Object.keys(this.validations).forEach((fieldName) => {
			if (!this.fieldValid(fieldName)) {
				allFieldsValid = false;
			}
		})

		if (allFieldsValid) {
			const newStylistData = {
				first_name: this.state.first_name,
				last_name: this.state.last_name,
				phone_number: this.state.phone_number,
				email: this.state.email,
				experience_in_years: this.state.experience_in_years,
				licenses: this.state.licenses,
				photo1: this.state.photo1,
				photo2: this.state.photo2,
				photo3: this.state.photo3,
				photo4: this.state.photo4,
				photo5: this.state.photo5,
				photo6: this.state.photo6,
				specializations: this.state.specializations,
			}


			this.props.addNewStylistCallback(newStylistData);
		}

		this.setState ({
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
			experience_in_years: '',
			licenses: '',
			photo1: '',
			photo2: '',
			photo3: '',
			photo4: '',
			photo5: '',
			photo6: '',
			specializations: '',
		});
	}

	render() {
		return(
			<div className="StylistSignUpForm">
				<h3> Sign Up: </h3>
				
				<form className="StylistSignUpForm_form" onSubmit={this.handleSubmit}>
					<div className="user_inputs">
						<input 
							placeholder="First Name"
							type="text"
							name="first_name"
							value={this.state.first_name}
							onChange={this.onChangeHandler}
						/>

						<input
							placeholder="Last Name"
							type="text"
							name="lasst_name"
							value={this.state.last_name}
							onChange={this.onChangeHandler}
						/>

						<input
							placeholder="Phone Number (1234567890)"
							type="text"
							name="phone_number"
							value={this.state.phone_number}
							onChange={this.onChangeHandler}
						/>

						<input
							placeholder="Email"
							type="text"
							name="email"
							value={this.state.email}
							onChange={this.onChangeHandler}
						/>

						<input
							placeholder="Experience (In years)"
							type="text"
							name="experience_in_years"
							value={this.state.experience_in_years}
							onChange={this.onChangeHandler}
						/>

						<input
							placeholder="Licenses or Certifications"
							type="file"
							name="licenses"
							value={this.state.licenses}
							onChange={this.onChangeHandler}
						/>

					</div>
				</form>
			</div>
		);
	}
}

export default StylistSignUpForm;