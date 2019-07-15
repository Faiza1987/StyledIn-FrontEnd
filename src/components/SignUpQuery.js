import React from 'react';
import './SignUpQuery.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StylistSignUpForm from './StylistSignUpForm';

const SignUpQuery = (props) => {
	return (
		<Router>
			<div className="signup-query">
				<h3> Are you a: </h3>
				<ul>
					<li className="stylist">
						<button className="link-button">
							<Link to='/stylist-signup'> Stylist </Link>
						</button>
					</li>
					<li className="salon-owner">
						<button className="link-button">
							<Link to='/salonowner-signup'> Salon Owner </Link>
						</button>
					</li>
				</ul>
			</div>
			<Route path="/stylist-signup" exact component={StylistSignUpForm}
			/>
		</Router>
	);
}

export default SignUpQuery;