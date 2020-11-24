import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {v1 as uuid} from 'uuid';
import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {
    TextField, ListItem, List, Container, ListItemIcon, ListItemSecondaryAction,
    Checkbox, Input
} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import './App.css';
import {addToDo, deletedToDO} from "../redux/actions";

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
        margin: '150px 0 0 0',
    },

    inputBorder: {
        border: '1px solid none',
        color: 'white',
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

const Blue = styled.div`  
    &:hover {
       span {
        color: blue;
        transition: 0.6s ease-out;
        transform: scale(1.2);   
       }
    }
`;
const Yellow = styled.div`
    transition: 0.6s ease-out;
    &:hover {
       span {
        color: yellow; 
        transition: 0.6s ease-out;
        transform: scale(1.2);    
       }
    }
`;
const Green = styled.div`
    transition: 0.6s ease-out;
    &:hover {
       span {
        color: green;  
        transition: 0.6s ease-out;   
        transform: scale(1.2);     
       }
    }
`;
const Red = styled.div`
    transition: 0.6s ease-out;
    &:hover {
       span {
        color: red;
        transition: 0.6s ease-out;
        transform: scale(1.2);              
       }
    }
`;

function App() {
    let [name, setName] = useState();
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
                    <div className={classes.line}>
                        <Blue className={classes.column}>
                            <span className={classes.blue}>C</span>
                            <span className={classes.blue}><CreateIcon/></span>
                        </Blue>
                        <Yellow className={classes.column}>
                            <span className={classes.yellow}>R</span>
                            <span className={classes.yellow}><LocalLibraryIcon/></span>
                        </Yellow>
                        <Green className={classes.column}>
                            <span className={classes.green}>U</span>
                            <span className={classes.green}><UpdateIcon/></span>
                        </Green>
                        <Red className={classes.column}>
                            <span className={classes.red}>D</span>
                            <span className={classes.red}><DeleteIcon/></span>
                        </Red>
                    </div>
                    <div>
                        <ThemeProvider theme={theme}>
                            <div className={classes.display_line}>
                                <StyledTextField
                                    color="secondary"
                                    label="Заметочка"
                                    variant="outlined"
                                    id="deterministic-outlined-input"
                                    onChange={ (e) => setName(e.target.value)}
                                    value={name}
                                />
                                <Button
                                    className={classes.button}
                                    onClick={() => {
                                        dispatch(addToDo(
                                            {
                                                id: uuid(),
                                                name: name,
                                            }
                                        ));
                                        setName('');
                                    }}
                                >
                                    ADD
                                </Button>
                            </div>
                            <List className={classes.root}>
                                {todos.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem key={value.id} role={undefined} dense button
                                                  onClick={handleToggle(value.id)}>
                                            <ListItemIcon>
                                                <Checkbox
                                                    edge="start"
                                                    checked={checked.indexOf(value.id) !== -1}
                                                    tabIndex={-1}
                                                    disableRipple
                                                    inputProps={{'aria-labelledby': labelId}}
                                                />
                                            </ListItemIcon>
                                            <Input
                                                id={value.id}
                                                className={classes.inputBorder}
                                                primary={`${value.name}  ${value.id.length > 1 ? value.id[2] : value.id}`}
                                                defaultValue={`${value.name}  ${value.id.length > 1 ? value.id[2] : value.id}`}
                                                inputProps={{'aria-label': 'description'}}
                                            />
                                            <ListItemSecondaryAction>
                                                <Button onClick={() => dispatch(deletedToDO(value.id))}>
                                                    <CloseIcon color={"error"}/>
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
