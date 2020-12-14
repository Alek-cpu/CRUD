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
} from "../../store/users/actions/actions";
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

    let todos = useSelector(({ tasks }) => tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [taskId, setTaskId] = useState([]);
    const [isInput, setIsInput] = useState(false);
    const [editTask, setEditTask] = useState();

    useEffect(() => {
        dispatch(loadUsersData());
    }, []);

    useEffect(() => {
        dispatch(deletedTask(taskId));
    }, [taskId]);

    const toggleState = (id, field, value) => {
        const selectedTask = todos.find((item) => item.id === id);
        dispatch(markToFavorite({...selectedTask, [field]: value }));
    }

    const uploadedTask = (id, text) => {
        const textTask = todos.find((item) => item.id === id);
        console.log(editTask.length);
        console.log(text);
        if (editTask.length === 0) {
            dispatch(uploadTask({...textTask, text: text}))
        } else {
            dispatch(uploadTask({...textTask, text: editTask.split(' ').filter(e => e.trim().length).join(' ')}))
        }
    }

    const handleToggle = (value) => () => {
        const index = checked.indexOf(value);

        if (index === -1) {
            return [...checked, value];
        }

        return [...checked.slice(index, index + 1), ...checked.slice((index + 1))]
    };

    const filteredTasks = todos.filter(({parametr}) => (!parametr))
        .sort((a, b) => b.favorite - a.favorite)

    return (
        <>
            <ThemeProvider theme={theme}>
                <EnterField/>
                <List className={classes.root}>
                    {filteredTasks.map(({id, time, text, favorite, completed}) => {
                        return (
                            !completed &&
                            <ListItem key={id} dense button onClick={handleToggle(id)}>
                                <ListItemIcon>
                                    {!completed
                                            ? <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                onClick={() => toggleState(id, 'completed', !completed)}
                                            />
                                            : <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                checked={checked}
                                                onClick={() => toggleState(id, 'completed', !completed)}
                                                disabled
                                            />
                                    }
                                </ListItemIcon>
                                {isInput
                                    ? <Input
                                        className={classes.inputBorder}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                        onChange={(e) =>
                                            setEditTask(e.currentTarget.value)}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                uploadedTask(id, text);
                                                setIsInput(false);
                                            }
                                        }}
                                        onBlur={(e) => {
                                            uploadedTask(id, text);
                                            setIsInput(false);
                                        }}
                                    />
                                    : <InputBase
                                        key={id}
                                        className={classes.inputBorder}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        fullWidth
                                        value={text}
                                        onFocus={
                                            () => {
                                                setIsInput(true);
                                            }
                                        }
                                    />
                                }
                                <div className={classes.timeMessage}>{time}</div>
                                <img
                                    src={favorite ? SpaceFullStar : SpaceStar}
                                    onClick={() => toggleState(id, 'favorite', !favorite)}
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