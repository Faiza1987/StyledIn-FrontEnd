import React, { Component } from 'react';
import axios from 'axios';
import './SearchJobs.css';


class SearchJobs extends Component {
	constructor(props){
		super(props);

		this.state = {
			allJobs: null,
			error: null,
		}
	}

	componentDidMount(){
		axios.get(
			"https://salonowners-api.herokuapp.com/jobs_api/jobs/"
		)
		.then(response => {
			console.log("This is what the response looks like on a successful api call", response.data);

			this.setState({
				allJobs: response.data
			})
		})
		.catch(error => {
			this.setState({
				error: error.message
			});
		});
	}

	render(){

		if(this.state.allJobs === null){
			return null;
		}

		const mappedJobs = this.state.allJobs.map((job, i) => {
			return (
        <div key={i}>
          <ul>
            <li>Title: {job.title}</li>
            <li>Hourly Rate: {job.hourly_rate}</li>
            <li>Salon: {job.company}</li>
            <li>Address: {job.address}</li>
            <li>City: {job.city}</li>
            <li>State: {job.state}</li>
            <li>Zip Code: {job.zip_code}</li>
            <li>Description: {job.description}</li>
            <li>Contact: <a href={`mailto:${job.contact_email}`}> Jobs at {job.company}</a>
						</li>
          </ul>
        </div>
      );
		})

		return (
      <div>
        <h3> All Jobs: </h3>
        <summary>
					{mappedJobs}
        </summary>
      </div>
    );
	}
}

export default SearchJobs;