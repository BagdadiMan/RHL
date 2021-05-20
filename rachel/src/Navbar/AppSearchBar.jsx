import React, {useState} from 'react';
import SearchBar from "material-ui-search-bar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    searchBar: {
      marginLeft: "auto",
      marginRight: "auto"
    }
})
 
export const AppSearchBar = () => {
    const [value, setValue] = useState("");
    const classes = useStyles();

    const search = (value) => {
      alert(`חיפשת את הערך "${value}"!`)
    }

    return (
        <SearchBar
          className={classes.searchBar}
          value={value}
          onChange={setValue}
          onRequestSearch={() => search(value)}
          placeholder="חיפוש"
        />
      );
}
