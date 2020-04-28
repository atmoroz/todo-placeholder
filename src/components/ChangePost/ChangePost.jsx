import React, { useState } from 'react';
import './changePost.css';
import { requestUpdatePostRequest } from '../../store/action/action';
import { useDispatch, useSelector } from 'react-redux';

const ChangePost = ({ id, title, body, setShowForm, userId }) => {
  const [titlePost, setTitlePost] = useState(title);
  const [bodyPost, setBodyPost] = useState(body);
  const dispatch = useDispatch();
  const allPosts = useSelector(state => state.posts);

  const submitForm = e => {
    e.preventDefault();
    setShowForm(prev => !prev);
    let index = allPosts.findIndex(post => post.id === id);
    allPosts[index] = { ...allPosts[index], spin: true };
    dispatch(requestUpdatePostRequest({ id, titlePost, bodyPost, userId }));
    return;
  };
  const changePost = ({ target: { name, value } }) => {
    if (name === 'titleInput') {
      setTitlePost(value);
      return;
    }
    setBodyPost(value);
    return;
  };
  return (
    <form onSubmit={submitForm} className="postForm">
      <label htmlFor="titleInput" className="postLabel">
        Title:
        <input
          name="titleInput"
          type="text"
          value={titlePost}
          onChange={changePost}
          className="postInput"
        />
      </label>
      <label htmlFor="bodyInput" className="postLabel">
        Body:
        <textarea
          name="bodyInput"
          type="text"
          value={bodyPost}
          onChange={changePost}
          className="postTextarea"
        />
      </label>
      <button className="postButton" onClick={submitForm}>
        Change
      </button>
    </form>
  );
};
export default ChangePost;
