import { Divider } from '@material-ui/core';
import React from 'react';

export const LabelsList = (props) => {
    const { labels } = props;
    return (
        <>
            {labels.map(label => <Label label={label} />)}
        </>
    );
};