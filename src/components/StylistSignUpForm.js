import React, { Component } from 'react';
import './StylistSignUpForm.css';
import axios from 'axios';



class StylistSignUpForm extends Component {
	constructor(props){
		super(props);

		this.state = {
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
			experience_in_years: '',
			licenses: null,
			photo1: null,
			photo2: null,
			photo3: null,
			photo4: null,
			photo5: null,
			photo6: null,
			specializations: '',
		}
	}


	onChangeHandler = (event) => {
		const newState = {}
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	onFileChangeHandler = (event) => {
		console.log(event.target.files[0])

		this.setState({
			licenses: event.target.files[0],
			photo1: event.target.files[0],
			photo2: event.target.files[0],
			photo3: event.target.files[0],
			photo4: event.target.files[0],
			photo5: event.target.files[0],
			photo6: event.target.files[0],
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		
		this.setState ({
			first_name: '',
			last_name: '',
			phone_number: '',
			email: '',
			experience_in_years: '',
			licenses: null,
			photo1: null,
			photo2: null,
			photo3: null,
			photo4: null,
			photo5: null,
			photo6: null,
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

						<label> Licenses or Certifications: </label>
						<input
							type="file"
							name="licenses"
							value={this.state.licenses}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 1: </label>
						<input
							type="file"
							name="photo1"
							value={this.state.photo1}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 2: </label>
						<input
							type="file"
							name="photo2"
							value={this.state.photo2}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 3: </label>
						<input
							type="file"
							name="photo3"
							value={this.state.photo3}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 4: </label>
						<input
							type="file"
							name="photo4"
							value={this.state.photo4}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 5: </label>
						<input
							type="file"
							name="photo5"
							value={this.state.photo5}
							onChange={this.onFileChangeHandler}
						/>

						<label> Photo 6: </label>
						<input
							type="file"
							name="photo6"
							value={this.state.photo6}
							onChange={this.onFileChangeHandler}
						/>

						<textarea
							placeholder="Specializations"
							type="text"
							name="specializations"
							value={this.state.specializations}
							onChange={this.onChangeHandler}
						/>
					</div>

					<button
						type="submit"
						onClick={this.addStylist}
						className="submit-button"
					> Sign Up </button>
				</form>
			</div>
		);
	}
}

export default StylistSignUpForm;