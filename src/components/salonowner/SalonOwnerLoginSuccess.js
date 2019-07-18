import React from 'react';
import './SalonOwnerLoginSuccess.css';
import { Link } from 'react-router-dom';


const SalonOwnerLoginSuccess = () => {
	return(
		<div className="success">
			<h3> You have successfully logged in! </h3>
			<ul>
				<li className="profile">
					<button className="link-button">
						<Link to="/salon-profile"> View Profile </Link>
					</button>
					<br/>
				</li>
				<li className="jobs">
					<button className="link-button">
						<Link to="/create-job"> Create A Job </Link>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default SalonOwnerLoginSuccess;