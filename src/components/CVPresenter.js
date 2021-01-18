import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #f9eded;
  color: #2a2929;
  display: flex;
  flex-direction: column;
  width: 50%;
`
const StyledHeading = styled.h3`
  font-weight: bold;
`
const StyledSectionHeader = styled.h2`
  font-weight: bold;
`
const StyledSection = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  width: 100%;
`

const CVPresenter = (props) => {
    const { name, email, experience, school, yearsAttended, handleEdit } = props;

    return (
        <StyledContainer>
            <StyledSection>
                <StyledSectionHeader>General Info</StyledSectionHeader>
                <li>
                    <StyledHeading>Name:</StyledHeading> 
                    {name}
                </li>
                <li>
                    <StyledHeading>Email:</StyledHeading> 
                    {email} 
                </li>
                <li>
                    <StyledHeading>Years of Experience:</StyledHeading> 
                    {experience} 
                </li>
                <button onClick={() => handleEdit()}>Edit Section</button>
            </StyledSection>
            <StyledSection>
              <StyledSectionHeader>Education</StyledSectionHeader>
                <li>
                    <StyledHeading>School:</StyledHeading> 
                    {school} 
                </li>
                <li>
                    <StyledHeading>Years Attended:</StyledHeading> 
                    {yearsAttended} 
                </li>
                <button onClick={() => handleEdit()}>Edit Section</button>
            </StyledSection>
        </StyledContainer>
    )
}

export default CVPresenter;