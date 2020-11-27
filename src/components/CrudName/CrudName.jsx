import CreateIcon from "@material-ui/icons/Create";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import UpdateIcon from "@material-ui/icons/Update";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    column: {
        display: 'flex',
        flexDirection: 'column-reverse',
        cursor: 'pointer',
        fontSize: '2rem',
    },
})

const Word = styled.div`  
    &:hover {
       span {
        color: ${props => (props.red ? "red" : props.blue ? "blue" : props.yellow ? "yellow" : "green")};
        transition: 0.2s ease-out;
        transform: scale(1.2);
        margin-top: -3px;   
       }
    }
`;

export default function CrudName() {
    const classes = useStyles();

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