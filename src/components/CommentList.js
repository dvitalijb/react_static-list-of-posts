import React from 'react';
import Comment from './Comment';

export default function CommentList(props) {
    return props.comments.map(item => <Comment key={item.id} name={item.name} body={item.body}/>);
}