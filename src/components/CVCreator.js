import React, { Component } from 'react';
import CVPresenter from './CVPresenter';
import FormInput from './FormInput';

class CVCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
              name: '',
              email: ''
            },
            label: '',
            placeholder: '',
            value: '',
            type: '',
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.clearForm = this.clearForm.bind(this);
    }

  handleChange = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState( prevState => {
      return {
        user: {
          ...prevState.user, [name]: value
        }
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
    console.log(this.state);
    this.clearForm(event);
  }

  clearForm = (event) => {
    event.preventDefault();
  }

  render() {
      return (
        <>  
          <h3>Build a Resume</h3>
          {!this.state.submitted &&
            <form onSubmit={this.onSubmit}>
              <h2>General Info</h2>
              <FormInput
                  label="Name"
                  placeholder="Your Name Here"
                  name="name"
                  type="text"
                  value={this.state.user.name}
                  onChange={this.handleChange}
              />
              <FormInput
                  label="Email"
                  placeholder="Your Email Here"
                  name="email"
                  type="text"
                  value={this.state.user.email}
                  onChange={this.handleChange}
              />
                <button type="submit" label="submit">Submit</button>
            </form>
          }
          {this.state.submitted &&
            <CVPresenter
              name={this.state.user.name} 
              email={this.state.user.email}
            />
          }
        </>  
      );
  }

}

export default CVCreator;