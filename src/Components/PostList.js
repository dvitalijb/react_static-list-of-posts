import React from 'react';
import {posts} from '../State/posts';
import {users} from '../State/users';
import {comments} from '../State/comments';
import Post from './Post';

export default function PostList() {
    const usersMap = users.reduce((acc, user) => ({...acc, [user.id]: user,}), {});
    const commentsMap = comments
        .reduce((acc, comment) => ({...acc, [comment.id]: comment,}), {});
    const items = posts.map(item => <Post key={item.id}
                                          userId={item.userId}
                                          title={item.title}
                                          body={item.body}
                                          commentsMap={commentsMap}
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