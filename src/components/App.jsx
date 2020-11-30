import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ListItem, List, Container, Button} from '@material-ui/core';

import {NavigationButton} from "./Navigation/Navigation"
import {FavouriteTasks} from "./FavoriteTasks/FavouriteTasks";
import {EnterTaskPage} from "./EnterTaskPage/EnterTaskPage";
import {EnterField} from "./EnterField/EnterField";
import {PaginationButton} from "../forms/button/PaginationButton"
import CrudName from "./CrudName/CrudName";

import './App.scss';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import {Switch} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="App">

                    <header className="App-header">
                        <Container fixed>
                        <NavigationButton/>
                        <CrudName/>
                        </Container>
                    </header>
                    <section>
                        <Container fixed>
                        <Route path={'/alltask'}>
                            <EnterTaskPage/>
                        </Route>
                        <Route path={'/favourite-task'}>
                            <FavouriteTasks/>
                        </Route>
                        </Container>
                    </section>
            </div>
        </BrowserRouter>
    );
}

export default App;
