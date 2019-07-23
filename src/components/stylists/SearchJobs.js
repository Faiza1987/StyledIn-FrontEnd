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
			console.log("ALL JOBS", response.data);

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
        <div key={i} className="job-details">
          <ul>
            <li>
              <span className="label">Title: </span> {job.title}
            </li>
            <li>
              <span className="label">Hourly Rate:</span>
              {job.hourly_rate}
            </li>
            <li>
              <span className="label">Salon:</span> {job.company}
            </li>
            <li>
              <span className="label">City:</span> {job.city}
            </li>
            <li>
              <span className="label">State:</span> {job.state}
            </li>
            <li>
              <span className="label">Contact:</span>
              <a href={`mailto:${job.contact_email}`}>
                Jobs at {job.company}
              </a>
            </li>
          </ul>
          <hr />
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