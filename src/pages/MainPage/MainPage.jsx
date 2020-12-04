import React, {useEffect, useState} from "react";
import {createMuiTheme, makeStyles} from "@material-ui/core/styles";
import styled from "styled-components";
import {ThemeProvider} from "@material-ui/styles";
import {
    Checkbox, Input, List, ListItem, ListItemIcon, ListItemSecondaryAction
} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {fetch} from "../../store/users/actions";
import {deletedToDO} from "../../store/users/actions";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import SpaceStar from "../../img/star_outline-24px.svg";
import SpaceHalfStar from "../../img/star_half-24px.svg";
import SpaceFullStar from "../../img/star-24px.svg";
import {EnterField} from "../../components/EnterField/EnterField";
import {tasksAPI} from "../../utils/api";
import {AnimateRotate} from '../../styled/styledMainPage';
import {theme} from '../../themes/themes'
import {useStylesMainPage} from '../../hooks/useStylesMainPage'

export const MainPage = () => {

    let dispatch = useDispatch();
    let todos = useSelector(state => state);

    const classes = useStylesMainPage();

    const [checked, setChecked] = useState([1]);
    const [star, setStar] = useState([SpaceStar]);
    const [data, setData] = useState([]);
    const [deleted, setDeleted] = useState([]);

    useEffect(() => {
        tasksAPI.getTasks().then(({data}) => {
                setData(data);
            })
    }, []);

    useEffect(() => {
        dispatch(deletedToDO(tasksAPI.deleteTasks(deleted)))
    }, [deleted]);

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
                <EnterField />
                <List className={classes.root}>
                    {data.map(({id, time, text}) => {
                        // const labelId = `checkbox-list-label-${value}`;
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
                                    {/*<ListItemSecondaryAction className={classes.timeLocation}>*/}
                                    <div className={classes.timeMessage}>{time}</div>
                                    <img
                                        src={star}
                                        onMouseOver={() => setStar([SpaceHalfStar])}
                                        onClick={() => setStar([SpaceFullStar])}
                                    />
                                    <Button onClick={() => dispatch(deletedToDO(setDeleted([id])))}>
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