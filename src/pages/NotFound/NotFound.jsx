import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import {Word} from "../../styled/Word";
import {useStylesWord} from "../../hooks/useStylesWord";
import CreateIcon from "@material-ui/icons/Create";
import NotFound from "../../img/not-found.gif"

export default function CrudName() {
    const classes = useStylesWord();

    return (
        <>
            <div className={classes.line}>
                <Word blue className={classes.column}>
                    <span>N</span>
                </Word>
                <Word yellow className={classes.column}>
                    <span>O</span>
                </Word>
                <Word green className={classes.column}>
                    <span>T</span>
                </Word>
                <Word green className={classes.column}>
                    <span>_</span>
                </Word>
                <Word red className={classes.column}>
                    <span> F</span>
                </Word>
                <Word blue className={classes.column}>
                    <span>O</span>
                </Word>
                <Word yellow className={classes.column}>
                    <span>U</span>
                </Word>
                <Word green className={classes.column}>
                    <span>N</span>
                </Word>
                <Word red className={classes.column}>
                    <span>D</span>
                </Word>
            </div>
            <img src={NotFound} />
        </>
    );
}