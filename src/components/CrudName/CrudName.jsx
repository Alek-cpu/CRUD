import CreateIcon from "@material-ui/icons/Create";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import {Word} from "../../styled/Word";
import {useStylesWord} from "../../hooks/useStylesWord";

function CrudName() {
    const classes = useStylesWord();

    const arrWords = [
        {
            color: 'Chartreuse',
            word: 'C',
            tag: <CreateIcon/>
        },
        {
            color: 'Red',
            word: 'R',
            tag: <LocalLibraryIcon/>
        },
        {
            color: 'Purple',
            word: 'U',
            tag: <UpdateIcon/>
        },
        {
            color: 'DarkTurquoise',
            word: 'D',
            tag: <DeleteIcon/>
        }
    ]

    return (
        <div className={classes.line}>
             {arrWords.map(({word, tag, color}) => {
                 return (
                     <Word colors={color} className={classes.column}>
                         <span>{word}</span>
                         <span>{tag}</span>
                     </Word>
                 );
             })}
        </div>
    );
}

export default CrudName;