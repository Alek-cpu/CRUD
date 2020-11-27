import {addToDo} from "../../store/users/actions";
import {v1 as uuid} from "uuid";
import moment from "moment";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";

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
    color: #61DAFB; 💚
  }
  label:selected {
    color: "#61DAFB"; 💚
  }
  label:focus {
    color: "#61DAFB"; 💚
  }
  .MuiOutlinedInput-root {
    color: #61DAFB;
    fieldset {
      border-color: #61DAFB; 💔
      color: #61DAFB;
    }
    &:hover fieldset {
      border-color: yellow; 💛
      color: #61DAFB;
    }
    &.Mui-focused fieldset {
      border-color: #61DAFB; 💚
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
    let [editable, seteditable] = useState(false);
    let todos = useSelector(state => state)
    let dispatch = useDispatch();
    const classes = useStyles();

    return(
        <form
            onSubmit={(e)=>{
                e.preventDefault()
                if ( name && name.trim()) {
                    dispatch(addToDo(
                        {
                            id: uuid(),
                            name: name.split(' ').filter(e => e.trim().length).join(' '),
                            time: moment().format('LTS'),
                        }
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
                onChange={ (e) => setName(e.target.value)}
                value={name}
            />
            <AnimationButton
                className={classes.button}
                onClick={() => {
                    if ( name && name.trim()) {
                        dispatch(addToDo(
                            {
                                id: uuid(),
                                name: name.split(' ').filter(e => e.trim().length).join(' '),
                                time: moment().format('LTS'),
                            }
                        ));
                        setName('');
                    }
                }}
            >
                ADD
            </AnimationButton>
        </form>
    );
}