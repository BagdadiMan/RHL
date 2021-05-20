import { Container, Divider, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import { LabelsList } from '../Label/LabelsList';
import { PostsList } from '../post/PostsList';
import { UserTimeline } from '../Timeline/UserTimeline';

export const ProfilePage = (props) => {
    return (<Container>
        <Grid xs={8}>
            <PostsList />
        </Grid>
        <Grid xs={4}>
            <LabelsList labels={labels} />
            <Divider />
            <UserTimeline timeLineItems={timeLineItems} />
        </Grid>
    </Container>);
}