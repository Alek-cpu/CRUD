import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {addNewTask, deletedTask, loadUsersData, markToFavorite} from "../../store/users/actions";

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
    const [star, setStar] = useState([SpaceStar]);

    const [deletedId, setDeletedId] = useState([]);

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

    const filteredTasks = todos.filter(({status}) => (!status))
        .sort((a, b) => b.favorite - a.favorite);

    return (
        <>
            <ThemeProvider theme={theme}>
                <EnterField/>
                <List className={classes.root}>
                    {filteredTasks.map(({id, time, text, favorite, completed}) => {
                        return (
                            <ListItem key={id} role={undefined} dense button
                                      onClick={handleToggle(id)}>
                                <ListItemIcon>
                                    {
                                        !completed
                                            ? <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                            />
                                            : <Checkbox
                                                edge="start"
                                                tabIndex={-1}
                                                disableRipple
                                                checked={checked}
                                            />
                                    }
                                </ListItemIcon>
                                {!completed
                                    ? <Input
                                        id={id}
                                        className={classes.inputBorder}
                                        primary={`${text}`}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                    />
                                    : <Input
                                        disabled
                                        id={id}
                                        className={classes.inputBorder}
                                        primary={`${text}`}
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
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