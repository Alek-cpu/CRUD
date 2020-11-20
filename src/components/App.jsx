import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {NoSsr, TextField, Divider, ListItem, ListItemText, List} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import './App.css';
import React from "react";

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

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <header className="App-header">
                <div>
                    Перед вами приложение по созданию заметок
                </div>
                <div>
                    Иначе говоря CRUD
                </div>
                <div>
                    <ThemeProvider theme={theme}>
                        <div className={classes.display_line}>
                            <NoSsr>
                                <StyledTextField
                                    color="secondary"
                                    label="Заметочка"
                                    variant="outlined"
                                    id="deterministic-outlined-input"
                                />
                            </NoSsr>
                            <Button className={classes.button}>
                              Hook
                            </Button>
                        </div>
                        <List component="nav" className={classes.root} aria-label="mailbox folders">
                            <ListItem button>
                                <ListItemText primary="Inbox" />
                            </ListItem>
                            <Divider />
                            <ListItem button divider>
                                <ListItemText primary="Drafts" />
                            </ListItem>
                            <ListItem button>
                                <ListItemText primary="Trash" />
                            </ListItem>
                            <Divider light />
                            <ListItem button>
                                <ListItemText primary="Spam" />
                            </ListItem>
                        </List>
                    </ThemeProvider>
                </div>
            </header>
        </div>
    );
}

export default App;
