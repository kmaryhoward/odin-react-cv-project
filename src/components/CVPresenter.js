import React from "react";

const CVPresenter = (props) => {
    const { name, email } = props;

    return (
        <div>
            <ul>
                <li>Name: {name} </li>
                <li>Email: {email} </li>
            </ul>
        </div>
    )
}

export default CVPresenter;