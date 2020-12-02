import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import {fetch} from "../../store/users/actions";
import {deletedToDO} from "../../store/users/actions";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import SpaceStar from "../../img/star_outline-24px.svg";
import SpaceHalfStar from "../../img/star_half-24px.svg";
import SpaceFullStar from "../../img/star-24px.svg";
import {EnterField} from "../EnterField/EnterField";

const useStyles = makeStyles({
    root: {
        marginTop: '15px'
    },
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

    inputBorder: {
        border: '1px solid none',
        color: 'white',
    },
    timeMessage: {
        fontSize: '12px',
        color: '#696969',
        width: '110px',
        padding: '0 5px',
    },

    timeLocation: {
        display: 'flex',
        width: 'inherit',
        alignItems: 'center',
    }
});

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#61DAFB',
        },
    },
});

const AnimateRotate = styled(CloseIcon)`
  &:hover {
    transition: 0.6s ease-out;
    transform: rotate(360deg);
  }
`;

export const EnterTaskPage = () => {

    let dispatch = useDispatch();
    let todos = useSelector(state => state);

    const classes = useStyles();

    const [checked, setChecked] = useState([1]);
    const [star, setStar] = useState([SpaceStar]);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/allTasks')
            .then(({data}) => {
                setData(data);
            })
    }, []);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <EnterField/>
                <List className={classes.root}>
                    {data.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;
                        return (
                            <>
                                <ListItem key={value.id} role={undefined} dense button
                                          onClick={handleToggle(value.id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <Input
                                        id={value.id}
                                        className={classes.inputBorder}
                                        primary={`${value.text}`}
                                        defaultValue={`${value.text ? value.text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                    />
                                    {/*<ListItemSecondaryAction className={classes.timeLocation}>*/}
                                    <div className={classes.timeMessage}>{value.time}</div>
                                    <img
                                        src={star}
                                        onMouseOver={() => setStar([SpaceHalfStar])}
                                        onClick={() => setStar([SpaceFullStar])}
                                    />
                                    <Button onClick={() => dispatch(deletedToDO(value.id))}>
                                        <AnimateRotate color={"error"}/>
                                    </Button>
                                    {/*</ListItemSecondaryAction>*/}
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </ThemeProvider>
        </>
    );
}