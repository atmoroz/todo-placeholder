import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AllPostsContainer from './AllPostsContainer';

import { requestAllPosts } from '../../store/action/action';
import './allPosts.css';
import Loading from '../Loading/Loading';
const AllPosts = () => {
  const dispatch = useDispatch();
  const { isLoading, Posts } = useSelector(store => store);

  useEffect(() => {
    dispatch(requestAllPosts());
  }, [dispatch]);

  return (
    <>
      <h2 className="title">Posts</h2>
      <div className="postWrapper">
        {isLoading ? (
          <Loading
            css={{
              position: 'absolute',
              top: 'calc(50% - 35px)',
              bottom: '0',
              left: 'calc(50% - 35px)',
              right: '0',
            }}
          />
        ) : (
          Posts.map(post => (
            <AllPostsContainer
              key={post.id}
              title={post.title}
              body={post.body}
              id={post.id}
              userId={post.userId}
              spin={post.spin ? post.spin : null}
            />
          ))
        )}
      </div>
    </>
  );
};
export default AllPosts;
