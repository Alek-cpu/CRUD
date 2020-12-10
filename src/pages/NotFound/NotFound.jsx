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

    const arrWords = [
        {
            color: 'navajowhite',
            word: 'N'
        },
        {
            color: 'orange',
            word: 'O'
        },
        {
            color: 'tomato',
            word: 'T'
        },
        {
            color: 'dimgray',
            word: '_'
        },
        {
            color: 'forestgreen',
            word: 'F'
        },
        {
            color: 'olive',
            word: 'O'
        },
        {
            color: 'mediumpurple',
            word: 'U'
        },
        {
            color: 'navajowhite',
            word: 'N'
        },
        {
            color: 'darkslateblue',
            word: 'D'
        }
    ]

    return (
        <>
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
            <img src={NotFound} />
        </>
    );
}