import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SignUpQuery from './components/SignUpQuery';
import StylistRegistrationForm from './components/StylistRegistrationForm';
import SalonOwnerRegistrationForm from './components/SalonOwnerRegistrationForm';
import LogInQuery from './components/LogInQuery';
import StylistLogIn from './components/StylistLogIn';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStylists: [],
      stylistId: null,
      allSalonOwners: [],
      salonOwnerId: null,
    }
  }

  render(){
    return(
      <div>
        <Router>
          <div className="navbar">
            <ul>
              <li className="logo"> 
                <Link to='/'> StyledIn </Link>
            </li>
              <li className="signup">
                <Link to='/signup-query'> Sign Up </Link>
              </li>
              <li className="login">
                <Link to='/login-query'> Log In </Link>
              </li>
            </ul>
          </div>
          <Route path="/" exact component={Title} />
          <Route path="/signup-query" component={SignUpQuery} />
          <Route path="/register-stylist" component={StylistRegistrationForm} />
          <Route path="/register-salonowner" component={SalonOwnerRegistrationForm} />
          <Route path="/login-query" component={LogInQuery} />
          <Route path="/login-stylist" component={StylistLogIn} />
        </Router>

      </div>
    );
  }
}

function Title() {
  return (
    <section>
      <div className="title">StyledIn </div>
    </section>
  );
}

export default App;
