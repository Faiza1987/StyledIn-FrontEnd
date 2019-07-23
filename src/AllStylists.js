import React, { Component } from "react";
import axios from "axios";
import "./AllStylists.css";
import { Link } from 'react-router-dom'; 

class AllStylists extends Component {
	constructor(props){
		super(props);

		this.state = {
			allStylists: null,
			error: null,
		}
	}

	componentDidMount(){
		axios.get(
			"https://styledin-stylists-api.herokuapp.com/api/users/"
		)
		.then(response => {
			console.log("COMPONENT DID MOUNT", response.data)

			this.setState({
				allStylists: response.data
			})
		})
		.catch(error => {
			this.setState({
				error: error.message
			});
		});
	}

	render(){
		console.log("ALL STYLISTS FROM STATE", this.state.allStylists);

		if (this.state.allStylists === null){
			return null;
		}
		
		const mappedStylists = this.state.allStylists.map((stylist, i) => {
			return (
        <div key={i} className="stylist-details">
          <ul>
            <li>
              <Link to="/query">
                {stylist.first_name} {stylist.last_name}
              </Link>
            </li>
          </ul>
        </div>
      );
		})
		return (
      <div>
        <ul>
          <li>
						{mappedStylists} 
          </li>
        </ul>
      </div>
    );
	}
}

export default AllStylists;