import React, { useState } from 'react';
import { PostFooter } from './PostFooter';
import { PostContent } from './PostContent';
import { PostBar } from './PostBar';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';

export const Post = (props) => {
  const { id, publisher, lastUpdateDate, content, likes, comments, labels, loggedInUser } = props;
  const [likesAmount, setLikesAmount] = useState(0);
  const addLike = () => {
    setLikesAmount(prev => prev+1);
    console.log("likesAmount" + likesAmount);
  };
  const addComment = (comment) => {
    comments.push(comment);
  };

  return (
    <Grid xs={6} justify='center'>
      <Card>
        <CardContent>
          <PostBar publisher={publisher} labels={labels} time='1 hour ago' />
          <PostContent content={content} media='../public/static/images/Rahel.png' />
        </CardContent>
        <PostFooter likesAmount={likesAmount} comments={comments} addLike={addLike} addComment={addComment} loggedInUser={loggedInUser} />
      </Card>
    </Grid>
  );
}
