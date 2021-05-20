import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';


export const AddPostModal = (props) => {
    const [open, setOpen] = useState(props.open);
    const [content, setContent] = useState((props.post && props.post.content) || "");

    const handleClose = () => {
        setOpen(false);
    }

    const addPost = () => {
        alert(content);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
        >
            <DialogTitle>{"יצירת פוסט"}</DialogTitle>
            <DialogContent>
            <TextField
                value={content}
                onChange={(e) => {setContent(e.target.value)}}
                id="outlined-multiline-static"
                multiline
                rows={10}
                placeholder="מה בא לך לשתף?"
                variant="outlined"
                autoFocus
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={addPost}>
                    פרסום
                </Button>
            </DialogActions>
      </Dialog>
    );
};