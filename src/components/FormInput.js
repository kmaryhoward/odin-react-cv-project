import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
  border: 1px solid;
  border-radius: 3px;
  padding: 10px;
  margin: 20px;
`

const FormInput = (props) => {
    return (
        <>
          <label htmlFor={props.label}>{props.label}</label>
            <StyledInput
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                type={props.type}
                onChange={props.onChange}
            >
            </StyledInput>
        </>
    );
}

export default FormInput;