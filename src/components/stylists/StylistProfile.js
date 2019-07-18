import React, {Component} from 'react';
import './StylistProfile.css';
import axios from 'axios';

class StylistProfile extends Component {
	constructor(props){
		super(props);

		this.state = {
			displayUserProfile: true,
			error: null,
		}
	}

	getUserDetails() {
		let user = JSON.parse(localStorage.getItem("token"));
		const userToken = user.data.id;

		console.log("USER TOKEN: ", userToken);

		axios.get(
			"https://styledin-stylists-api.herokuapp.com/api/users/", { headers: { "Authorization": `Bearer ${userToken}`}}).then(response => {
				console.log('RESPONSE:', response.data);
			}).catch(error => {
				this.setState({
					error: error.message
				})
			});
	}

	render() {
		return(
			<div>
				<h3> Profile: </h3>
					
			</div>
		);
	}
}

export default StylistProfile;