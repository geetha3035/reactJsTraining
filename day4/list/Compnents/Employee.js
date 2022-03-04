import React from 'react';

const Employee = (props) => {
    const { id, name, email, age } = props.data;

    return(
        <tr>
        <td>{ id }</td>
        <td>{ name }</td>
        <td>{ email }</td>
        <td>{ age }</td>
    </tr>
    )
}
export default Employee;