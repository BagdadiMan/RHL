import React from 'react';
import Chip from '@material-ui/core/Chip';

export const Label = (props) => {
    const {text, id} = props.label;

    const handleClick = () => {
        alert(`Redirect to searching the chip! chip id is ${id}`);
      };

    return (
        <Chip label={text} size="small" onClick={handleClick} className={props.className}/>
    );
};