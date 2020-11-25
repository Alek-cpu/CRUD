import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import moment from "moment";
import {v1 as uuid} from 'uuid';
import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {
        TextField, ListItem, List, Container, ListItemIcon, ListItemSecondaryAction,
        Checkbox, Input, ListItemText
} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import CrudName from "./CrudName/CrudName";
import './App.scss';
import {addToDo, deletedToDO} from "../store/users/actions";
import SpaceStar from '../img/star_outline-24px.svg';
import SpaceHalfStar from '../img/star_half-24px.svg';
import SpaceFullStar from '../img/star-24px.svg';

const useStyles = makeStyles({
    root: {
      marginTop: '15px'
    },
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
    },
    line: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    column: {
        display: 'flex',
        flexDirection: 'column-reverse',
        cursor: 'pointer',
        fontSize: '2rem',
    },

    inputBorder: {
        border: '1px solid none',
        color: 'white',
    },
    timeMessage: {
        fontSize: '12px',
        color: '#696969',
    },

    timeLocation: {
        display: 'flex',
        width: 'inherit',
        alignItems: 'center',
    }
});

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#61DAFB',
        },
    },
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

const AnimateRotate = styled(CloseIcon)`
    &:hover {
        transition: 0.6s ease-out;   
        transform: rotate(360deg); 
    }
`;

const WidthInput = styled(Input)`
    .MuiInput-root {
        padding-right: 10%;
    }
`;

function App() {
    let [name, setName] = useState();
    let [editable, seteditable] = useState(false);
    let todos = useSelector(state => state)
    let dispatch = useDispatch();
    const classes = useStyles();

    const [checked, setChecked] = React.useState([1]);

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
        <div className="App">
            <header className="App-header">
                <Container fixed>
                    <CrudName />
                    <div>
                        <ThemeProvider theme={theme}>
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
                            <List className={classes.root}>
                                {todos.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem key={value.id} role={undefined} dense button
                                                  onClick={handleToggle(value.id)}>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    // checked={checked.indexOf(value.id) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                />
                                            </ListItemIcon>
                                            <WidthInput
                                                id={value.id}
                                                className={classes.inputBorder}
                                                primary={`${value.name}`}
                                                defaultValue={`${value.name}`}
                                                inputProps={{'aria-label': 'description'}}
                                                autoComplete={false}
                                                fullWidth
                                            />
                                            <ListItemSecondaryAction className={classes.timeLocation}>
                                                <div className={classes.timeMessage}>{value.time}</div>
                                                <img src={SpaceFullStar} alt=""/>
                                                <Button onClick={() => dispatch(deletedToDO(value.id))}>
                                                    <AnimateRotate color={"error"}/>
                                                </Button>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ThemeProvider>
                    </div>
                </Container>
            </header>
        </div>
    );
}

export default App;
