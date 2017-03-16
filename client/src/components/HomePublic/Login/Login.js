import React, { Component } from 'react';
import './login.css';

class Login extends React.Component {

// récuperation des inputs LOGIN

  constructor(props) {
    super(props);
    this.state = {
      prenom: "",
      nom: "",
      mail: "",
      motdepasse: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    const target = event.target;
    const value = target.type === 'string' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('Tu es désormais inscrit chez Bet and Go :)' + " " +  'Ton nom est: ' + this.state.nom + " " + this.state.prenom);
    // event.preventDefault();
  }

  render() {

    return (
        <form className="LoginForm" method="post" action="/api/users"onSubmit={this.handleSubmit}>
          <h1>Sign Up for Free</h1>
          <div className="formName">
            <label>
                <p>FirstName:</p>
                <input type="text"
                required
                name="prenom"
                type="string"
                value={this.state.prenom}
                onChange={this.handleChange}
                />
            </label>
            <label>
                <p>SecondName:</p>
                <input type="text"
                required
                name="nom"
                type="string"
                value={this.state.nom}
                onChange={this.handleChange}
                />
            </label>
            <label>
                <p>Email Adress:</p>
                <input type="text"
                required
                name="mail"
                type="string"
                value={this.state.mail}
                onChange={this.handleChange}
                />
            </label>
            <label>
                <p>Password:</p>
                <input type="text"
                required
                name="motdepasse"
                type="string"
                value={this.state.motdepasse}
                onChange={this.handleChange}
                />
            </label>
          </div>
            <input className="loginButton" type="submit" value="Submit" method="post" action="/api/users"/>
        </form>
    );
  }
}


export default Login;
