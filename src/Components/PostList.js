import React from 'react';
import {posts} from '../State/posts';
import {users} from '../State/users';

export default function PostList() {
    const userMap =users.reduce((acc,user)=>({...acc,[user.id]:user,}),{});
    //const items = posts
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

            </tbody>
        </table>
    )
}