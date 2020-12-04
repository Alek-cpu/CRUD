import CreateIcon from "@material-ui/icons/Create";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import {styledWord} from "../../styled/styledWord";
import {useStylesWord} from "../../hooks/useStylesWord";

export default function CrudName() {
    const classes = useStylesWord();

    return (
        <div className={classes.line}>
            <styledWord blue className={classes.column}>
                <span>C</span>
                <span><CreateIcon/></span>
            </styledWord>
            <styledWord yellow className={classes.column}>
                <span>R</span>
                <span><LocalLibraryIcon/></span>
            </styledWord>
            <styledWord green className={classes.column}>
                <span>U</span>
                <span><UpdateIcon/></span>
            </styledWord>
            <styledWord red className={classes.column}>
                <span>D</span>
                <span><DeleteIcon/></span>
            </styledWord>
        </div>
    );
}