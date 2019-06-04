import React from 'react';

export default function Post(props) {
    return(
        <tr>
            <td>{props.title}</td>
            <td>{props.body}</td>
            <td> </td>
            <td></td>
        </tr>
    )
}