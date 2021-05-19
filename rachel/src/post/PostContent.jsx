import React from 'react';
import { CardMedia, Typography } from '@material-ui/core';

export const PostContent = (props) => {
    const {content, media} = props;
    return (<>
        <Typography>{content}</Typography>
        <CardMedia src={media} />
    </>);
};