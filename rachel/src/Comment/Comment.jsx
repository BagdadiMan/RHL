import React from 'react';
import { Paper, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppAvatar } from '../Utils/AppAvatar';

const useStyles = makeStyles({
    root: {
        display: "flex",
        padding: 0
    },
    commentContent: {
        display: "flex",
        flexDirection: "column",
        padding: 0,
        marginRight: "5px",
    },
    comment: {
        backgroundColor: "#f0f2f5",
        borderRadius: "10px",
        padding: "5px 10px",
        display: "inline-block",
        width: "fit-content"
    },
    underline: {
        '&:hover': {
            cursor: "pointer",
            textDecoration: "underline" 
        }
    },
    publisher: {
        fontWeight: "600",
        textDecoration: "none",
        color: "black",
        display: "block"
    }
  });

export const Comment = (props) => {
    const {publisher, content} = props.comment;
    const classes = useStyles();

    return (
        <Container className={`${classes.root} ${props.className}`}>
            <AppAvatar user={publisher} />
            <Container className={classes.commentContent}>
                <Paper className={classes.comment} elevation={0}>
                    <Typography>
                        <a href={`#/${publisher.id}`} className={`${classes.publisher} ${classes.underline}`}>
                            {publisher.name}
                        </a>
                        {content}
                    </Typography>
                </Paper>
            </Container>
        </Container>
    );
};