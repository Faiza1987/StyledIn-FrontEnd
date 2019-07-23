import React, {Component} from 'react';
import './SalonProfile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


class SalonProfile extends Component {
	constructor(props){
		super(props);

		this.state = {
			salonData: null,
			error: null,
		}
	}

	componentDidMount() {
		axios
      .get(
        "https://salonowners-api.herokuapp.com/owners_api/users/" +
          localStorage.getItem("salonId"),
        {
          headers: {
            Authorization: `JWT ${localStorage.getItem("salonOwnerToken")}`
          }
        }
      )
      .then(response => {
        console.log(
          "This is what response.data looks like from the API on a successful response",
          response.data
        );

        this.setState({
          salonData: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: error.message
        });
      });
	}

	render() {
		if (this.state.salonData === null){
			return null;
		}

		return (
      <div>
        <h3> Profile: </h3>
        <summary className="salon-details">
          <ul>
            <li>
              <span className="label">First Name: </span>
              {this.state.salonData.first_name}
            </li>
            <li>
              <span className="label">Last Name:</span>{" "}
              {this.state.salonData.last_name}
            </li>
            <li>
              <span className="label">Email: </span>
              {this.state.salonData.email}
            </li>
            <li>
              <span className="label">Salon Name:</span>
              {this.state.salonData.profile.salon_name}
            </li>
            <li>
              <span className="label">Salon Address: </span>
              {this.state.salonData.profile.salon_address}
            </li>
            <li>
              <span className="label">Salon City: </span>
              {this.state.salonData.profile.salon_city}
            </li>
            <li>
              <span className="label">Salon State: </span>
              {this.state.salonData.profile.salon_state}
            </li>
            <li>
              <span className="label">Salon Zip Code: </span>
              {this.state.salonData.profile.salon_zip_code}
            </li>
            <li>
              <span className="label">Salon Description: </span>
              {this.state.salonData.profile.salon_description}
            </li>
          </ul>
        </summary>

        <button className="edit-profile">
          <Link to="edit-salon-profile"> Edit Profile </Link>
        </button>
      </div>
    );
	}
}

export default SalonProfile;