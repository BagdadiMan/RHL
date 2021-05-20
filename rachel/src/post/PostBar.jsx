import { Avatar, Typography } from '@material-ui/core';
import React from 'react';
import { AppAvatar } from '../Utils/AppAvatar';

export const PostBar = (props) => {
    const { publisher, labels, time } = props;
    const showLabels = (labels) => labels.join();
    return (
        <>
            <Typography variant='h2'>
                <AppAvatar user={publisher} />
                {publisher.name}
            </Typography>
            <Typography variant='h6'>{`${time}, ${labels?.length > 0 && showLabels(labels)}`}</Typography>
        </>
    );
};