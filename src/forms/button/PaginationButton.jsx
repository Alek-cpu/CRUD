import {Button, ListItemSecondaryAction} from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import {NavLink, Link} from "react-router-dom";
import {Linked} from "../../styled/styledLinked";
import {StyledAnimationButtonOther} from "../../styled/styledAnimationButtonOther";

export const PaginationButton = (props) => {
    return (
        <Linked to={props.path}>
            <StyledAnimationButtonOther variant="contained" color={props.color}>
                <img src={props.icon} />
                <span>{props.textField}</span>
            </StyledAnimationButtonOther>
        </Linked>
    );
}