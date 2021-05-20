import { Container } from '@material-ui/core';
import React from 'react';
import { Post } from './Post';

export const PostsList = (props) => {
    const { posts, loggedInUser } = props;
    return (
        <Container>
            {posts.map(post => (<Post key={post.id} post={post} loggedInUser={loggedInUser} />))}
        </Container>
    );
};