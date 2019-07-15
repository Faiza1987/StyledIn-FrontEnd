import React, {Component} from 'react';

class SalonOwnerSignUpForm extends Component{
	constructor(props){
		super(props);

		this.state = {
			first_name: ''
		}
	}
	render(){
		return(
			<h3>Sign Up Form goes here </h3>
		)
	}
}

export default SalonOwnerSignUpForm;