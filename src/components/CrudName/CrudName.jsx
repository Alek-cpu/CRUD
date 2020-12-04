import CreateIcon from "@material-ui/icons/Create";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import {Word} from "../../styled/Word";
import {useStylesWord} from "../../hooks/useStylesWord";

export default function CrudName() {
    const classes = useStylesWord();

    return (
        <div className={classes.line}>
            <Word blue className={classes.column}>
                <span>C</span>
                <span><CreateIcon/></span>
            </Word>
            <Word yellow className={classes.column}>
                <span>R</span>
                <span><LocalLibraryIcon/></span>
            </Word>
            <Word green className={classes.column}>
                <span>U</span>
                <span><UpdateIcon/></span>
            </Word>
            <Word red className={classes.column}>
                <span>D</span>
                <span><DeleteIcon/></span>
            </Word>
        </div>
    );
}