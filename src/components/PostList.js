import React from 'react';
import Post from './Post';


export default function PostList(props) {
    const { comments } = props;
    const usersMap = props.users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
    const items = props.posts.map(item => (<Post key={item.id}
                                                 userId={item.userId}
                                                 title={item.title}
                                                 body={item.body}
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
    )
}