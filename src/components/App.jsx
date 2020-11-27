import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import moment from "moment";
import {v1 as uuid} from 'uuid';
import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {
        TextField, ListItem, List, Container, ListItemIcon, ListItemSecondaryAction,
        Checkbox, Input, ListItemText
} from '@material-ui/core';
import axios from "axios";
import API from '../utils/api'
import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

import {EnterField} from "./EnterField/EnterField";
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

const AnimateRotate = styled(CloseIcon)`
    &:hover {
        transition: 0.6s ease-out;   
        transform: rotate(360deg); 
    }
`;

function App() {
    // let [name, setName] = useState( {allTasks:[]});
    let [data, setData] = useState( {allTasks:[]});
    let [editable, seteditable] = useState(false);

    useEffect(async () => {
        const result = await axios.get(
            'http://localhost:3001/allTasks'
        );
        setData(result.data);
    }, []);

    let todos = useSelector(state => state)
    let dispatch = useDispatch();
    const classes = useStyles();

    const [checked, setChecked] = useState([1]);

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
                            <EnterField />
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
                                            <Input
                                                id={value.id}
                                                className={classes.inputBorder}
                                                primary={`${value.name}`}
                                                defaultValue={`${value.name}`}
                                                inputProps={{'aria-label': 'description'}}
                                                fullWidth
                                            />
                                            <ListItemSecondaryAction className={classes.timeLocation}>
                                                <div className={classes.timeMessage}>{value.time}</div>
                                                <img
                                                    src={SpaceStar}
                                                    onMouseOver={e => (e.currentTarget.src = SpaceHalfStar)}
                                                    onMouseOut={e => (e.currentTarget.src = SpaceStar)}
                                                    onClick={e => (e.currentTarget.src = SpaceFullStar)}
                                                />
                                                <Button onClick={() => dispatch(deletedToDO(value.id))}>
                                                    <AnimateRotate color={"error"}/>
                                                </Button>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ThemeProvider>
                        {/*<ul>*/}
                        {/*    {data.all.map(item => (*/}
                        {/*        <li key={item.objectID}>*/}
                        {/*            <a href={item.url}>{item.title}</a>*/}
                        {/*        </li>*/}
                        {/*    ))}*/}
                        {/*</ul>*/}
                    </div>
                </Container>
            </header>
        </div>
    );
}

export default App;
