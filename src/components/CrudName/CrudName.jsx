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

const Blue = styled.div`  
    &:hover {
       span {
        color: blue;
        transition: 0.2s ease-out;
        transform: scale(1.2);
        margin-top: -3px;   
       }
    }
`;
const Yellow = styled.div`
    transition: 0.2s ease-out;
    &:hover {
       span {
        color: yellow; 
        transition: 0.2s ease-out;
        transform: scale(1.2); 
        margin-top: -3px;   
       }
    }
`;
const Green = styled.div`
    transition: 0.2s ease-out;
    &:hover {
       span {
        color: green;  
        transition: 0.2s ease-out;   
        transform: scale(1.2);
        margin-top: -3px;     
       }
    }
`;
const Red = styled.div`
    transition: 0.2s ease-out;
    &:hover {
       span {
        color: red;
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
            <Blue className={classes.column}>
                <span>C</span>
                <span><CreateIcon/></span>
            </Blue>
            <Yellow className={classes.column}>
                <span>R</span>
                <span><LocalLibraryIcon/></span>
            </Yellow>
            <Green className={classes.column}>
                <span>U</span>
                <span><UpdateIcon/></span>
            </Green>
            <Red className={classes.column}>
                <span>D</span>
                <span>
                    <DeleteIcon/>
                </span>
            </Red>
        </div>
    );
}