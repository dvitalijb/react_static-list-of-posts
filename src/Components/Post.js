import React from 'react';
import User from './User';

export default function Post(props) {
    const { usersMap } = props;
    const { commentsMap } = props;
    const { userId } = props;
    const comments = {};

    for (let key in commentsMap) {
        if (commentsMap[key].postId === userId) {
            comments[key] = commentsMap[key];
        }
    }

    return(
        <tr>
            <td><span>{props.title}</span></td>
            <td>{props.body}</td>
            <td><User user={usersMap.userId} /> </td>

        </tr>
    )
}