import React, { Component }from 'react';
import './StylistLogIn.css';
import axios from 'axios';

class StylistLogIn extends Component {
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
		return this.state.email.length > 0 && this.state.password.length > 0 && this.state.username.length > 0;
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
  
  loginStylist = () => {
    const payload = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    // POST request to retreive JWT auth token from server
    axios.post(
      "https://styledin-stylists-api.herokuapp.com/api/auth/login/", payload)
      .then(response => {
        console.log("RESPONSE DATA", JSON.stringify(response));
        
        localStorage.setItem("token", response.data['token']);
        localStorage.setItem("stylistId", response.data.user.pk);

        this.props.setStylistIdCallback(localStorage.getItem('stylistId'));

        console.log("TOKEN:", localStorage.getItem('token'));
        console.log("Stylist ID:", localStorage.getItem("stylistId"));
        // LOG USER IN WITH TOKEN 
        // REDIRECT TO LOGINSUCCESS COMPONENT
        window.location = "/stylist-login-success";
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });

  }

	render(){
		return (
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
            <br />
            <input
              placeholder="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.onChangeHandler}
              required
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
              required
            />
            <br />
            <button 
              type="submit" 
              className="login-button"
              onClick={this.loginStylist} > Log In </button>
          </section>
        </div>
      </form>
    );
	}
}

export default StylistLogIn;