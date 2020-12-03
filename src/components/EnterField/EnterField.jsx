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

const useStyles = makeStyles({
    button: {
        background: 'inherit',
        border: '2px solid #61DAFB',
        borderRadius: 3,
        color: '#61DAFB',
        height: '100%',
        padding: '0 30px',
    },
    display_line: {
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: '5fr 1fr',
        gridGap: '10px',
        width: '100%',
        alignItems: 'center',
    }
});

const StyledTextField = styled(TextField)`
  label {
    color: #61DAFB;
  }

  label:focus {
    color: #61DAFB;
  }

  .MuiOutlinedInput-root {
    color: #61DAFB;

    fieldset {
      border-color: #61DAFB;
      color: #61DAFB;
    }

    &:hover fieldset {
      border-color: yellow;
      color: #61DAFB;
    }

    &.Mui-focused fieldset {
      border-color: #61DAFB;
      color: #61DAFB;
    }
  }
`;

const AnimationButton = styled(Button)`
  &:active {
    transition: .2s ease-out;
    transform: scale(.9);
`;

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
    const classes = useStyles();


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
                className={classes.display_line}>
                <StyledTextField
                    color="secondary"
                    label="Заметочка"
                    variant="outlined"
                    id="deterministic-outlined-input"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <AnimationButton
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
                </AnimationButton>
            </form>
        </>
    );
}