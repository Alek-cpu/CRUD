import React, {useState,useEffect} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {useStylesMainPage} from "../../hooks/useStylesMainPage";
import SpaceStar from "../../img/star-outline.svg";
import {
    completedTask,
    deletedTask,
    loadCompletedData,
    loadFavouriteData,
    loadUsersData,
    markToFavorite
} from "../../store/users/actions";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "../../themes/themes";
import {EnterField} from "../../components/EnterField/EnterField";
import {Checkbox, Input, List, ListItem, ListItemIcon} from "@material-ui/core";
import SpaceFullStar from "../../img/star.svg";
import {AnimateRotate} from "../../styled/MainPage";

export default function ComplitedTask () {
    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [star, setStar] = useState([SpaceStar]);
    const [data, setData] = useState([]);
    const [deletedId, setDeletedId] = useState([]);
    // const [toggle, setToggle] = useState(data.favorite);

    useEffect(() => {
        dispatch(loadCompletedData());
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

    return (
        <>
            {console.log({sss: todos})}
            <ThemeProvider theme={theme}>
                <EnterField/>
                <List className={classes.root}>
                    {todos.map(({id, time, text, favorite, completed}) => {
                        return (
                            completed &&
                            <>
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
                                                    // disabled
                                                />
                                        }
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