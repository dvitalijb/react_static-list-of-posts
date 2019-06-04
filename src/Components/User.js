import React from 'react';

export default function User(props) {
    return(
        <section>
            <p>{props.name}</p>
            <span>{props.email}</span>
        </section>
    )
}