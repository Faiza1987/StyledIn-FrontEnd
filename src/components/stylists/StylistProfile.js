import React, {Component} from 'react';
import './StylistProfile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <summary className="stylist-details">
          <ul>
            <li>
              {" "}
              <span className="label"> First Name: </span>{" "}
              {this.state.stylistData.first_name}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Last Name: </span>{" "}
              {this.state.stylistData.last_name}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Email: </span>{" "}
              {this.state.stylistData.email}{" "}
            </li>
            <li>
              <span className="label"> Phone Number: </span>{" "}
              {this.state.stylistData.profile.phone_number}
            </li>
            <li>
              <span className="label"> Experience (in years): </span>{" "}
              {this.state.stylistData.profile.years_experience}
            </li>
            <li>
              <span className="label"> Specializations: </span>{" "}
              {this.state.stylistData.profile.specializations}
            </li>
            <li>
              <span className="label"> License/Certification: </span>{" "}
              {this.state.stylistData.profile.licenses}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 1: </span>{" "}
              {this.state.stylistData.profile.photo1}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 2: </span>{" "}
              {this.state.stylistData.profile.photo2}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 3: </span>{" "}
              {this.state.stylistData.profile.photo3}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 4:</span>{" "}
              {this.state.stylistData.profile.photo4}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 5: </span>{" "}
              {this.state.stylistData.profile.photo5}{" "}
            </li>
            <li>
              {" "}
              <span className="label"> Photo 6: </span>{" "}
              {this.state.stylistData.profile.photo6}{" "}
            </li>
          </ul>
        </summary>
        <section id="edit-button">
          <button className="edit-profile">
            <Link to="/edit-stylist-profile"> Edit Profile </Link>
          </button>
        </section>
      </div>
    );
	}
}

export default StylistProfile;