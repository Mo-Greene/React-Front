import React from 'react';

const Student = (props) => {
    return (
        <div>
            <h1>name : {props.name}</h1>
            <p>email : {props.email}</p>
            <p>grade : {props.grade}</p>
        </div>
    )
}

export default Student;