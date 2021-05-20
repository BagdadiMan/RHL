import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import CardActions from '@material-ui/core/CardActions';
import { CommentsList } from '../Comment/CommentsList';
import { Grid, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const PostFooter = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCommentsTabOpen, setIsCommentsTabOpen] = useState(false);
    const [commentContent, setCommentContent] = useState('');
    const { likesAmount, comments, addLike, addComment, loggedInUser } = props;
    console.log(props);
    return (
        <>
            <CardActions>
                <Grid xs={12}>
                    <IconButton onClick={() => {
                        setIsLiked(prevIsLiked => !prevIsLiked);
                        addLike();
                    }}>
                        <FavoriteIcon color={isLiked ? 'secondary' : 'none'} />
                    </IconButton>
                    {`${likesAmount} likes`}
                    <IconButton onClick={() => setIsCommentsTabOpen(prevIsCommentsTabOpen => !prevIsCommentsTabOpen)}>
                        <ChatIcon />
                    </IconButton>
                    {`${comments?.length} comments`}
                </Grid>
                <Grid xs={12}>
                    <TextField onChange={event => setCommentContent(event.target.value)} />
                    <IconButton onClick={() => addComment({
                        publisher: loggedInUser,
                        content: commentContent
                    })}>
                        <AddIcon />
                    </IconButton>
                </Grid>
            </CardActions>
            {isCommentsTabOpen && (<CommentsList comments={comments} />)}
        </>
    );
}