import React from 'react';
import Post from './Post';
import { users } from '../State/users';
import { posts } from '../State/posts';


export default function PostList() {
    const usersMap = users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
    const items = posts.map(item => <Post key={item.id}
                                          userId={item.userId}
                                          title={item.title}
                                          body={item.body}
                                          usersMap={usersMap}/>);

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