import React, {useState,useEffect} from "react";
import axios from 'axios';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {useStylesMainPage} from "../../hooks/useStylesMainPage";
import SpaceStar from "../../img/star-outline.svg";
import {deletedTask, loadFavouriteData, loadUsersData} from "../../store/users/actions";
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "../../themes/themes";
import {EnterField} from "../../components/EnterField/EnterField";
import {Checkbox, Input, List, ListItem, ListItemIcon} from "@material-ui/core";
import SpaceFullStar from "../../img/star.svg";
import {AnimateRotate} from "../../styled/MainPage";

export default function FavouritePage () {
    let dispatch = useDispatch();

    let todos = useSelector(state => state.tasks);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [star, setStar] = useState([SpaceStar]);
    const [data, setData] = useState([]);
    const [deletedId, setDeletedId] = useState([]);
    const [toggle, setToggle] = useState();

    useEffect(() => {
        dispatch(loadFavouriteData());
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

    return (
        <>
            {console.log({sss: todos})}
            <ThemeProvider theme={theme}>
                <List className={classes.root}>
                    {todos.map(({id, time, text, favorite, completed}) => {
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
                                        defaultValue={`${text ? text : 'нет значения'}`}
                                        inputProps={{'aria-label': 'description'}}
                                        fullWidth
                                    />
                                    <div className={classes.timeMessage}>{time}</div>
                                    <div
                                        key={id}

                                    >
                                        {favorite ?
                                            <img
                                                src={SpaceFullStar}
                                                id={id}
                                            /> :
                                            <img
                                                src={SpaceStar}
                                                id={id}
                                            />
                                        }
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