import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, InputBase, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {
    addNewTask,
    completedTask,
    deletedTask,
    loadUsersData,
    markToFavorite,
    uploadTask
} from "../../store/users/actions";

import Button from "@material-ui/core/Button";
import {EnterField} from "../../components/EnterField/EnterField";
import {AnimateRotate} from '../../styled/MainPage';
import {theme} from '../../themes/themes'
import {useStylesMainPage} from '../../hooks/useStylesMainPage'

import CloseIcon from "@material-ui/icons/Close";
import SpaceStar from "../../img/star-outline.svg";
import SpaceHalfStar from "../../img/star-half.svg";
import SpaceFullStar from "../../img/star.svg";
import {index} from "../../store";

export const MainPage = () => {

    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [deletedId, setDeletedId] = useState([]);
    const [input, setInput] = useState(false);
    const [editTask, setEditTask] = useState();

    useEffect(() => {
        dispatch(loadUsersData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(deletedTask(deletedId));
    }, [deletedId]);

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

    function maketoFavorite(id, favorite) {
        const selectedTask = todos.find((item) => item.id === id);
        selectedTask.favorite = !favorite;
        dispatch(markToFavorite(selectedTask));
    }

    function checkedCompleted(id, completed) {
        const checkedTask = todos.find((item) => item.id === id);
        checkedTask.completed = !completed;
        dispatch(completedTask(checkedTask));
    }

    function uploadedTask(id, text) {
        console.log(text)
        const textTask = todos.find((item) => item.id === id);
        textTask.text = editTask;
        dispatch(uploadTask(textTask));
    }

    const filteredTasks = todos.filter(({status}) => (!status))
        .sort((a, b) => b.favorite - a.favorite)

    return (
        <>
            <ThemeProvider theme={theme}>
                <EnterField/>
                <List className={classes.root}>
                    {filteredTasks.map(({id, time, text, favorite, completed}) => {
                        return (
                            !completed &&
                            <ListItem key={id} role={undefined} dense button
                                      onClick={handleToggle(id)}>
                                <ListItemIcon>
                                    {
                                        !completed
                                            ? <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                onClick={() => checkedCompleted(id, completed)}
                                            />
                                            : <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                checked={checked}
                                                onClick={() => checkedCompleted(id, completed)}
                                                disabled
                                            />
                                    }
                                </ListItemIcon>
                                {input
                                    ? <Input
                                        key={id}
                                        id={id}
                                        className={classes.inputBorder}
                                        primary={`${text}`}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                        onChange={(e) => setEditTask(e.target.value)}
                                        value={editTask}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                // console.log(editTask)
                                                console.log('enter press here!')
                                                // uploadedTask(id,editTask,text);
                                            }
                                        }}
                                        onBlur={(e) => {
                                            console.log('blur! ')
                                            uploadedTask(id, text);
                                            setInput(false);
                                        }}
                                    />
                                    : <InputBase
                                        key={id}
                                        className={classes.inputBorder}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        fullWidth
                                        onFocus={() => {
                                            setInput(true);
                                        }}
                                    />
                                }
                                <div className={classes.timeMessage}>{time}</div>
                                <img
                                    src={favorite ? SpaceFullStar : SpaceStar}
                                    onClick={() => maketoFavorite(id, favorite)}
                                />
                                <Button onClick={() => setDeletedId(id)}>
                                    <AnimateRotate color={"error"}/>
                                </Button>
                            </ListItem>
                        );
                    })}
                </List>
            </ThemeProvider>
        </>
    );
}