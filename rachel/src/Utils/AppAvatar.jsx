import React from 'react';
import {Avatar} from '@material-ui/core';

export const AppAvatar = (props) => {
    const user = props.user;

    return (
    <>
        <Avatar alt={user.name} src={user.photoUrl} />
    </>
    );
}