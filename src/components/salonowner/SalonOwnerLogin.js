import React, { Component } from 'react';
import './SalonOwnerLogin.css';
import axios from 'axios';

class SalonOwnerLogin extends Component {
	constructor(props){
		super(props);

		this.state = {
			username: "",
			email: "",
			password: "",
			error: null,
		}
	}

	validateForm() {
		return this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
	}

	onChangeHandler = event => {
		const newState = {};
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
			username: "",
			email: "",
			password: "",
			error: null
		});
	}

	loginSalonOwner = () => {
		const payload = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password,
		}

		axios.post(
      "https://salonowners-api.herokuapp.com/owners_api/auth/login/", payload
    ).then(response => {
			console.log("RESPONSE DATA", response);
			
			localStorage.setItem("salonOwnerToken", response.data['token']);
			localStorage.setItem("salonId", response.data.user.pk);
			
			this.props.setSalonIdCallback(localStorage.getItem('salonId'));

			console.log("Salon Owner Token ", localStorage.getItem("salonOwnerToken"));
			console.log("Stylist ID:", localStorage.getItem("stylistId"));

			window.location = "/salonowner-login-success";

		}).catch(error => {
			this.setState({
				error: error.message
			});
		});
	}

	render(){
		return(
			<form className="login-form" onSubmit={this.handleSubmit}>
				<div className="container">
					<section className="user-inputs">
						<input
							placeholder="Username"
							type="text"
							name="username"
							value={this.state.username}
							onChange={this.onChangeHandler}
							required
						/>
						<br/>
						<input
							placeholder="Email"
							type="email"
							name="email"
							value={this.state.email}
							onChange={this.onChangeHandler}
							required
						/>
						<br/>
						<input
							placeholder="Password"
							type="password"
							name="password"
							value={this.state.password}
							onChange={this.onChangeHandler}
							required
						/>
						<br/>
						<button
							type="submit"
							className="login-button"
							onClick={this.loginSalonOwner}
						> Log In </button>
					</section>
				</div>
			</form>
		);
	}
}

export default SalonOwnerLogin;