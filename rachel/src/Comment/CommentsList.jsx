import React from 'react';
import { Comment } from "./Comment";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    comment: {
        marginTop: "5px"
    }
});

export const CommentsList = (props) => {
    const comments = props.comments;
    const classes = useStyles();

    return (
    <Container>
        {comments.map(comment => <Comment className={classes.comment} key={comment.id} comment={comment}></Comment>)}
    </Container>
    );
};