import React from 'react';
import './SignUpQuery.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StylistRegistrationForm from './StylistRegistrationForm';

const SignUpQuery = (props) => {
	return (
		<Router>
			<div className="signup-query">
				<h3> Are you a: </h3>
				<ul>
					<li className="stylist">
						<button className="link-button">
							<Link to='/register-stylist'> Stylist </Link>
						</button>
					</li>
					<li className="salon-owner">
						<button className="link-button">
							<Link to='/register-salonowner'> Salon Owner </Link>
						</button>
					</li>
				</ul>
			</div>
			<Route path="/register-stylist" component={StylistRegistrationForm}
			/>
		</Router>
	);
}

export default SignUpQuery;