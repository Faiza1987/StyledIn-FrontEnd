import React, { Component }from 'react';
import {Link} from 'react-router-dom';
import './StylistLogIn.css';
import axios from 'axios';

class StylistLogIn extends Component {
	constructor(props){
		super(props);

		this.state = {
			email: "",
			password: "",
		}
	}

	validateForm() {
		return this.state.email.length > 0 && this.state.password.length > 0;
	}

	onChangeHandler = event => {
		const newState = {};
		newState[event.target.name] = event.target.value;

		this.setState(newState);
	}

	handleSubmit = event => {
		event.preventDefault();

		this.setState({
      email: "",
      password: "",
    });
	}


	render(){
		return (
      <form className="login-form">
        <div className="container">
          <section className="user-inputs">
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
						<br/>
            <button type="submit" className="submit-button">
              Log In
            </button>
          </section>

          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
            <span class="psw">
              Forgot <Link to="#">password?</Link>
            </span>
          </div>
        </div>
      </form>
    );
	}
}

export default StylistLogIn;