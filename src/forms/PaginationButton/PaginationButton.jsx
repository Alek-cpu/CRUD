import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

import {Button, ListItemSecondaryAction} from "@material-ui/core";
import {Linked} from "../../styled/Linked";
import {AnimationButtonOther} from "../../styled/AnimationButtonOther";
import "./paginationButton.scss";

export const PaginationButton = ({path, color, icon, textField}) =>
    <Linked to={path} activeClassName="active">
        <AnimationButtonOther variant="contained" color={color}>
            <img src={icon}/>
            <span>{textField}</span>
        </AnimationButtonOther>
    </Linked>