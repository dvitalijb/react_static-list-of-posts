import React from 'react';
import { Post } from './Post';

export function PostList(props) {
    const { comments, users, posts } = props;
    const usersMap = users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
    const items = posts.map(item => (<Post key={item.id}
                                           userId={item.userId}
                                           title={item.title}
                                           body={item.body}
                                           id={item.id}
                                           comments={comments}
                                           usersMap={usersMap}
                                           />));

    return (
        <table>
            <thead>
                <tr>
                    <th>Post</th>
                    <th>User</th>
                    <th>Comments</th>
                </tr>
            </thead>
                <tbody>
                    {items}
                </tbody>
        </table>
    );
}
