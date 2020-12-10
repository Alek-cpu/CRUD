import React, {useState, useEffect} from "react";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

import Button from "@material-ui/core/Button";
import {ThemeProvider} from "@material-ui/styles";
import {Checkbox, Input, List, ListItem, ListItemIcon} from "@material-ui/core";
import {useStylesMainPage} from "../../hooks/useStylesMainPage";
import {
    completedTask,
    deletedTask,
    loadCompletedData,
    loadFavoriteTask,
    loadUsersData,
    markToFavorite
} from "../../store/users/actions";
import {theme} from "../../themes/themes";
import {AnimateRotate} from "../../styled/MainPage";
import {EnterField} from "../../components/EnterField/EnterField";
import SpaceFullStar from "../../img/star.svg";
import SpaceStar from "../../img/star-outline.svg";


export default function ComplitedTask() {
    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [taskId, setTaskId] = useState();

    useEffect(() => {
        dispatch(loadCompletedData());
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

    const checkedCompleted = (id, completed) => {
        const checkedTask = todos.find((item) => item.id === id);
        checkedTask.completed = !completed;
        dispatch(completedTask(checkedTask));
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <List className={classes.root}>
                    {todos.map(({id, time, text, favorite, completed}) => {
                        return (
                            completed &&
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
                                    <Input
                                        id={id}
                                        className={classes.inputBorder}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                        disabled
                                    />
                                    <div className={classes.timeMessage}>{time}</div>
                                    <Button onClick={() => setTaskId(id)}>
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