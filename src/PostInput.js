import React, { useState } from 'react';
import firebase from 'firebase';

export default function PostInput() {
  const [post, setPost] = useState({
    title: '',
    body: '',
    author: '',
  });

  function addToFirebase() {
    firebase.firestore().collection('posts').add(post);
  }

  return (
    <>
      <div className="PostInput">
        Title:
        <input className="inputField" onChange={(e) => setPost({ ...post, title: e.target.value })} />
        Your Name:
        <input className="inputField" onChange={(e) => setPost({ ...post, author: e.target.value })} />
        Message:
        <textarea rows="15" className="inputField" onChange={(e) => setPost({ ...post, body: e.target.value })} />
        <button type="button" onClick={() => { addToFirebase(); }}>Submit</button>
      </div>
    </>
  );
}
