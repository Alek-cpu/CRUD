import axios from 'axios';
import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ListItem, List, Container, Button} from '@material-ui/core';

import {NavigationButton} from "../Navigation/Navigation"
import FavoritePage from "../../pages/FavoritePage/FavoritePage";
import {MainPage} from "../../pages/MainPage/MainPage";
import {EnterField} from "../EnterField/EnterField";
import {PaginationButton} from "../../forms/PaginationButton/PaginationButton"
import CrudName from "../CrudName/CrudName";

import './App.scss';
import {
    Router, Route, Switch, BrowserRouter
} from 'react-router-dom';

import {routes} from "../../utils/routes";

export const App = () =>
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
                    <Switch>
                        {routes.map((route) => (
                            <Route
                                {...route}
                                key={route.id}
                            />
                        ))}
                    </Switch>
                </Container>
            </section>
        </div>
    </BrowserRouter>
