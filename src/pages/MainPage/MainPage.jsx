import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {deletedToDO, loadUsersData} from "../../store/users/actions";
import {favoriteToDO} from "../../store/users/actions";

import Button from "@material-ui/core/Button";
import {EnterField} from "../../components/EnterField/EnterField";
import {tasksAPI} from "../../utils/api";
import {AnimateRotate} from '../../styled/MainPage';
import {theme} from '../../themes/themes'
import {useStylesMainPage} from '../../hooks/useStylesMainPage'

import CloseIcon from "@material-ui/icons/Close";
import SpaceStar from "../../img/star-outline.svg";
import SpaceHalfStar from "../../img/star-half.svg";
import SpaceFullStar from "../../img/star.svg";

export const MainPage = () => {

    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [star, setStar] = useState([SpaceStar]);
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState([]);
    const [toggle, setToggle] = useState({favorite: false})

    useEffect(() => {
        tasksAPI.getTasks().then(({data}) => {
                setData(data);
            })
    }, []);

    useEffect(() => {
        dispatch(loadUsersData());
    }, [dispatch]);


    useEffect(() => {
        dispatch(deletedToDO(tasksAPI.deleteTasks(deleted)))
    }, [deleted]);

    useEffect(() => {
        dispatch(favoriteToDO(tasksAPI.deleteTasks(toggle)))
    }, [toggle]);

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

    const handleClick = () => {
        setToggle(!toggle)
        console.log('значение this:', toggle);
    }

    return (
        <>
            {console.log({sss: todos})}
            <ThemeProvider theme={theme}>
                <EnterField />
                <List className={classes.root}>
                    {todos.map(({id, time, text, favorite}) => {
                        return (
                            <>
                                <ListItem key={id} role={undefined} dense button
                                          onClick={handleToggle(id)}>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <Input
                                        id={id}
                                        className={classes.inputBorder}
                                        primary={`${text}`}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                    />
                                    <div className={classes.timeMessage}>{time}</div>
                                    <div key={id} onClick={() => handleClick(setToggle({favorite: toggle}))}>
                                        {toggle ?
                                            <img
                                                key={id}
                                                src={SpaceFullStar}
                                            /> :
                                            <img
                                                key={id}
                                                src={SpaceStar}
                                            />
                                        }
                                    </div>
                                    <Button onClick={() => dispatch(deletedToDO(setDeleted([id])))}>
                                        <AnimateRotate color={"error"}/>
                                    </Button>
                                </ListItem>
                            </>
                        );
                    })}
                </List>
            </ThemeProvider>
        </>
    );
}