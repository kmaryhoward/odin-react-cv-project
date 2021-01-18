import React from "react";

const FormInput = (props) => {
    return (
        <>
          <label htmlFor={props.label}>{props.label}</label>
            <input
                name={props.name}
                placeholder={props.placeholder}
                value={props.value}
                type={props.type}
                onChange={props.onChange}
            >
            </input>
        </>
    );
}

export default FormInput;