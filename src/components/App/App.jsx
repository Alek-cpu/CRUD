import axios from 'axios';
import styled from 'styled-components';
import {makeStyles, createMuiTheme} from '@material-ui/core/styles';
import {ListItem, List, Container, Button} from '@material-ui/core';

import {NavigationButton} from "../Navigation/Navigation"
import FavouritePage from "../../pages/FavoritePage/FavouritePage";
import {MainPage} from "../../pages/MainPage/MainPage";
import {EnterField} from "../EnterField/EnterField";
import {PaginationButton} from "../../forms/button/PaginationButton"
import CrudName from "../CrudName/CrudName";

import './App.scss';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
// import {Route, Link, BrowserRouter, Router} from 'react-router-dom';
// import {Switch} from "react-router";
import {routes} from "../../utils/routes";

export const App = () => {
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
                        {routes.map(({id, exact, path, component}) => (
                            <Route
                                key={id}
                                exact={exact}
                                id={id}
                                path={path}
                                component={component}
                            />
                        ))}
                    </Container>
                </section>
            </div>
        </BrowserRouter>
    )
}
