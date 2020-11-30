import {Button, ListItemSecondaryAction} from "@material-ui/core";
import SpaceFullStar from "../../img/star-24px.svg";
import {deletedToDO} from "../../store/users/actions";
import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";

const AnimationButton = styled(Button)`
    margin: 30px 0 30px 0;
    &:active {
        transition: .2s ease-out;   
        transform: scale(.9); 
`;

export const PaginationButton = (props) => {
    return (
        <NavLink to={props.path}>
            <AnimationButton variant="contained" color={props.color}>
                <img src={props.icon}/>
                {props.textField}
            </AnimationButton>
        </NavLink>
    );
}