import React, { Component } from 'react';
import CVPresenter from './CVPresenter';
import FormInput from './FormInput';

import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #c7e3f3;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  color: #2a2929;
  display: block;
  width: 100%;
`

class CVCreator extends Component {
  state = {
          user: {
            name: '',
            email: '',
            experience: '',
            school: '',
            yearsAttended: ''
          },
          label: '',
          placeholder: '',
          value: '',
          type: '',
          submitted: false,
          editing: false
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

  handleEdit = () => {
    this.setState({ editing: true });
  }

  handleEditSubmit = event => {
    let value = event.target.value;
    let name = event.target.name;
    this.setState( prevState => {
      return {
        user: {
          ...prevState.user, [name]: value
        },
        submitted: true,
        editing: false
      }
    })
    event.preventDefault();
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
      const { submitted, editing } = this.state;

      return (
        <>  
          {(!submitted || editing) &&
            <StyledForm onSubmit={editing ? this.handleEditSubmit : this.onSubmit}>
              <h3>Build a Resume</h3>
              <h2>General Info</h2>
              <FormInput
                  label="Name"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={this.state.user.name}
                  onChange={this.handleChange}
              />
              <FormInput
                  label="Email"
                  placeholder="Your Email"
                  name="email"
                  type="text"
                  value={this.state.user.email}
                  onChange={this.handleChange}
              />
              <FormInput
                  label="Experience"
                  placeholder="Years of Experience"
                  name="experience"
                  type="number"
                  value={this.state.user.experience}
                  onChange={this.handleChange}
              />
              <h2>Education</h2>
                <FormInput
                    label="School"
                    placeholder="School Attended"
                    name="school"
                    type="text"
                    value={this.state.user.school}
                    onChange={this.handleChange}
                />
                <FormInput
                    label="Years Attended"
                    placeholder="Years Attended"
                    name="yearsAttended"
                    type="number"
                    value={this.state.user.yearsAttended}
                    onChange={this.handleChange}
                />
                <button type="submit" label="submit">Submit</button>
            </StyledForm>
          }
          {(submitted && !editing) &&
            <CVPresenter
              name={this.state.user.name} 
              email={this.state.user.email}
              experience={this.state.user.experience}
              school={this.state.user.school}
              yearsAttended={this.state.user.yearsAttended}
              handleEdit={this.handleEdit}
            />
          }
        </>  
      );
  }

}

export default CVCreator;