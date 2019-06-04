import React from 'react';

export default function User(props) {

    return(
        <section>
            <p>{props.user.name}</p>
            <span>{props.user.email}</span>
        </section>
    )
}