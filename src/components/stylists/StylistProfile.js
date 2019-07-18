import React, {Component} from 'react';
import './StylistProfile.css';
import axios from 'axios';

class StylistProfile extends Component {
	constructor(props){
		super(props);

		this.state = {
			stylistData: null,
			error: null,
		}
	}

	componentDidMount() {
			axios
        .get(
          "https://styledin-stylists-api.herokuapp.com/api/users/" +
            localStorage.getItem("stylistId"),
          {
            headers: {
              Authorization: `JWT ${localStorage.getItem("token")}`
            }
          }
        )
        .then(response => {
          console.log(
            "This is what response.data looks like from the API on a successful response",
            response.data
					);
					
					this.setState({
						stylistData: response.data
					})
        })
        .catch(error => {
          this.setState({
            error: error.message
          });
        });
	}

	render() {
	
		if (this.state.stylistData === null){
			return null;
		} 
		
		return (
      <div>
        <h3> Profile: </h3>
        <section className="stylist-details">
          <ul>
            <li> First Name: {this.state.stylistData.first_name} </li>
            <li> Last Name: {this.state.stylistData.last_name} </li>
            <li> Email: {this.state.stylistData.email} </li>
            <li>Phone Number: {this.state.stylistData.profile.phone_number}</li>
            <li>Enperience (in years):{this.state.stylistData.profile.years_experience}</li>
            <li>Specializations:{this.state.stylistData.profile.specializations}</li>
            <li>License/Certification: {this.state.stylistData.profile.licenses} </li>
            <li> Photo 1: {this.state.stylistData.profile.photo1} </li>
            <li> Photo 2: {this.state.stylistData.profile.photo2} </li>
            <li> Photo 3: {this.state.stylistData.profile.photo3} </li>
            <li> Photo 4: {this.state.stylistData.profile.photo4} </li>
            <li> Photo 5: {this.state.stylistData.profile.photo5} </li>
            <li> Photo 6: {this.state.stylistData.profile.photo6} </li>
          </ul>
        </section>
      </div>
    );
	}
}

export default StylistProfile;