import React from 'react';
import User from './User';
import CommentList from './CommentList';

export default function Post(props) {
    const { usersMap, comments, userId, title, body } = props;
    const commentsItems = comments.filter(comment => comment.postId === userId);

    return (
        <tr>
            <td>
                <span>{title}</span>
                <p>{body}</p>
            </td>
            <td>
                <User user={usersMap[userId]}/>
            </td>
            <td>
                <CommentList comments={commentsItems}/>
            </td>
        </tr>
    );
}