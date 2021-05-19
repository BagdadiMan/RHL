import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/Chat';
import CardActions from '@material-ui/core/CardActions';
import { CommentsList } from './Comment/CommentsList';

export const PostFooter = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const [isCommentsTabOpen, setIsCommentsTabOpen] = useState(false);
    const { likesAmount, comments, addLike, addComment } = props;
    console.log(props);
    return (
        <CardActions>
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
            {isCommentsTabOpen && (<CommentsList comments={comments} />)}
        </CardActions>
    );
}