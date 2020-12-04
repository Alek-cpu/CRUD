import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v1 as uuid} from "uuid";
import { format, compareAsc } from 'date-fns';
import styled from "styled-components";

import {addToDo} from "../../store/users/actions";

import {makeStyles} from "@material-ui/core/styles";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {SortButton} from "../../forms/SortButton/SortButton";
import {tasksAPI} from "../../utils/api";
import {useStylesEnterField} from "../../hooks/useStylesEnterField";
import {StyledTextField} from "../../styled/styledTextField";
import {StyledAnimationButton} from "../../styled/styledAnimationButton";

export const EnterField = () => {

    const [name, setName] = useState();
    const [task, setTask] = useState({
        id: '',
        text: '',
        time: '',
        favorite: false
    });
    let todos = useSelector(state => state)
    let dispatch = useDispatch();
    const classes = useStylesEnterField();


    useEffect(() => {
        if (task.text !== "") {
            tasksAPI.postTasks(task)
        }
    }, [task]);

    return (
        <>
            <SortButton/>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    console.log(JSON.stringify(task))
                    if (name && name.trim()) {
                        dispatch(addToDo(
                            setTask(
                                {
                                    id: uuid(),
                                    text: name.split(' ').filter(e => e.trim().length).join(' '),
                                    time: `${format(new Date(), 'yyyy-MM-dd')}`,
                                    favorite: false
                                }
                            )
                        ));
                        setName('');
                    }
                }}
                className={classes.display_line}>
                <StyledTextField
                    color="secondary"
                    label="Заметочка"
                    variant="outlined"
                    id="deterministic-outlined-input"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <StyledAnimationButton
                    className={classes.button}
                    onClick={() => {
                        if (name && name.trim()) {
                            dispatch(addToDo(
                                setTask(
                                    {
                                        // id: uuid(),
                                        text: name.split(' ').filter(e => e.trim().length).join(' '),
                                        time: `${format(new Date(), 'yyyy-MM-dd')}`,
                                        favorite: false
                                    }
                                )
                            ));
                            setName('');
                        }
                    }}
                >
                    ADD
                </StyledAnimationButton>
            </form>
        </>
    );
}