import React from 'react';
import './App.css';
import { PostList } from './components/PostList';
import { users } from './state/users';
import { posts } from './state/posts';
import { comments } from './state/comments';

function App() {
  return (
      <div className="App">
        <PostList users={users} posts={posts} comments={comments}/>
      </div>
  );
}

export default App;
