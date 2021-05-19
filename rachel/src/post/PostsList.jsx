import { Container } from '@material-ui/core';
import React from 'react';
import { Post } from './Post';

export const PostsList = (props) => {
    const { posts } = props;
    return (
        <Container>
            {posts.map(post => (<Post post={post} />))}
        </Container>
    );
};