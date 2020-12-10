import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

import Button from "@material-ui/core/Button";
import {useStylesMainPage} from "../../hooks/useStylesMainPage";
import {ThemeProvider} from "@material-ui/styles";
import {
    completedTask,
    deletedTask,
    loadFavoriteTask,
    loadUsersData,
    markToFavorite,
    uploadTask
} from "../../store/users/actions";
import {theme} from "../../themes/themes";
import {EnterField} from "../../components/EnterField/EnterField";
import {Checkbox, Input, InputBase, List, ListItem, ListItemIcon} from "@material-ui/core";

import {AnimateRotate} from "../../styled/MainPage";
import SpaceStar from "../../img/star-outline.svg";
import SpaceFullStar from "../../img/star.svg";

export default function FavoritePage() {
    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [deletedId, setDeletedId] = useState();
    const [editTask, setEditTask] = useState();
    const [input, setInput] = useState(false);

    useEffect(() => {
        dispatch(loadFavoriteTask());
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

    const maketoFavorite = (id, favorite) => {
        const selectedTask = todos.find((item) => item.id === id);
        selectedTask.favorite = !favorite;
        dispatch(markToFavorite(selectedTask));
    }

    const checkedCompleted = (id, completed) => {
        const checkedTask = todos.find((item) => item.id === id);
        checkedTask.completed = !completed;
        dispatch(completedTask(checkedTask));
    }

    const uploadedTask = (id, text) => {
        const textTask = todos.find((item) => item.id === id);
        textTask.text = editTask.split(' ').filter(e => e.trim().length).join(' ');
        if (!textTask.text) {
            textTask.text = text;
        }
        dispatch(uploadTask(textTask));
    }

    const changeTask = (e) => {
        setEditTask(e.currentTarget.value)
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <List className={classes.root}>
                    {todos.map(({id, time, text, favorite, completed}) => {
                        return (
                            favorite && !completed &&
                            <>
                                <ListItem key={id} dense button
                                          onClick={handleToggle(id)}>
                                    <ListItemIcon>
                                        {
                                            completed
                                                ? <Checkbox
                                                    edge="start"
                                                    tabIndex={-1}
                                                    disableRipple
                                                    onClick={() => checkedCompleted(id, completed)}
                                                    checked
                                                />
                                                : <Checkbox
                                                    edge="start"
                                                    tabIndex={-1}
                                                    disableRipple
                                                    onClick={() => checkedCompleted(id, completed)}
                                                />
                                        }
                                    </ListItemIcon>
                                    {input
                                        ? <Input
                                            key={id}
                                            id={id}
                                            className={classes.inputBorder}
                                            defaultValue={`${text ? text : 'нет значения'}`}
                                            inputProps={{'aria-label': 'description'}}
                                            fullWidth
                                            onChange={
                                                (e) => changeTask
                                            }
                                            onKeyPress={
                                                (e) => {
                                                    if (e.key === 'Enter') {
                                                        uploadedTask(id, text);
                                                        setInput(false);
                                                    }
                                                }
                                            }
                                            onBlur={
                                                (e) => {
                                                    uploadedTask(id, text);
                                                    setInput(false);
                                                }
                                            }
                                        />
                                        : <InputBase
                                            key={id}
                                            className={classes.inputBorder}
                                            defaultValue={`${text ? text : 'нет значения'}`}
                                            fullWidth
                                            onFocus={
                                                () => {
                                                    setInput(true);
                                                }
                                            }
                                        />
                                    }
                                    <div className={classes.timeMessage}>{time}</div>
                                    <div
                                        key={id}

                                    >
                                        <img
                                            src={favorite ? SpaceFullStar : SpaceStar}
                                            onClick={() => maketoFavorite(id, favorite)}
                                        />
                                    </div>
                                    <Button onClick={() => setDeletedId(id)}>
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