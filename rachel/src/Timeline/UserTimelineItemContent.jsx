import React from 'react';
import TimelineContent from '@material-ui/lab/TimelineContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Label } from '../Label/Label';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    },
    label: {
        marginLeft: '3px',
        marginBottom: '3px'
    }
  }));

export const UserTimelineItemContent = (props) => {
    const {title, labels} = props.item;
    const classes = useStyles();

    return (
        <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                    {title}
                </Typography>
                {labels.map(label => <Label label={label} className={classes.label}/>)}
            </Paper>
        </TimelineContent>
    );
}