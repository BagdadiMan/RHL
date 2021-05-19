import React from 'react';
import {PostFooter} from './PostFooter';

export const Post = (...props) => {
  // const [id, publisher, lastUpdateDate, content, likes, comments, labels] = props;
  // const addLike = (userId) => {

  // };
  // const addComment = () => {

  // };

  return (
    <>
      {/* <PostBar publisher labels time /> */}
      {/* <PostContent content /> */}
      <PostFooter likes comments addLike addComment />
    </>
  );
}
