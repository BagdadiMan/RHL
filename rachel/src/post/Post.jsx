import React from 'react';
import { PostFooter } from './PostFooter';
import { PostContent } from './PostContent';
import { PostBar } from './PostBar';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';

export const Post = (props) => {
  const { id, publisher, lastUpdateDate, content, likes, comments, labels } = props;
  const addLike = () => {
    console.log('like');
  };
  const addComment = () => {
    console.log('comment');
  };

  return (
    <Grid xs={6} justify='center'>
      <Card>
        <CardContent>
          <PostBar publisher={{ name: 'rhl', photoUrl: '../public/static/images/Rahel.png' }} labels={['officer']} time='1 hour ago' />
          <PostContent content={content} media='../public/static/images/Rahel.png' />
        </CardContent>
        <PostFooter likesAmount={5} comments={[]} addLike={addLike} addComment={addComment} />
      </Card>
    </Grid>
  );
}
