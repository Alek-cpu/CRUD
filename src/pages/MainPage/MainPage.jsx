import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";

import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, InputBase, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import {
    addNewTask,
    completedTask,
    deletedTask,
    loadUsersData,
    markToFavorite,
    uploadTask
} from "../../store/users/actions";
import EnterField from "../../components/EnterField/EnterField";
import {AnimateRotate} from '../../styled/MainPage';
import {theme} from '../../themes/themes'
import {useStylesMainPage} from '../../hooks/useStylesMainPage'


import SpaceStar from "../../img/star-outline.svg";
import SpaceHalfStar from "../../img/star-half.svg";
import SpaceFullStar from "../../img/star.svg";
import {index} from "../../store";

function MainPage() {

    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [taskId, setTaskId] = useState([]);
    const [input, setInput] = useState(false);
    const [editTask, setEditTask] = useState();

    useEffect(() => {
        dispatch(loadUsersData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(deletedTask(taskId));
    }, [taskId]);

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

    const changeTextField = (e) => {
        setEditTask(e.currentTarget.value)
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
                            <ListItem key={id} dense button
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
                                        className={classes.inputBorder}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                        onChange={(e) => changeTextField(e)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                uploadedTask(id, text);
                                                setInput(false);
                                            }
                                        }}
                                        onBlur={(e) => {
                                            uploadedTask(id, text);
                                            setInput(false);
                                        }}
                                    />
                                    : <InputBase
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
                                <Button onClick={() => setTaskId(id)}>
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

export default MainPage;