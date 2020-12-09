import {PaginationButton} from "../../forms/button/PaginationButton";
import styled from "styled-components";
import TasksIcon from "../../img/menu-book.svg";
import FavoriteIcon from "../../img/star-white.svg";
import CompletedIcon from "../../img/thumb-up.svg";
import {Button} from "@material-ui/core";
import {NavigationButtonBackground} from "../../styled/NavigationButtonBackground";

export const NavigationButton = () => {
    return(
        <NavigationButtonBackground>
            <PaginationButton
                color={"primary"}
                textField={"Главная"}
                icon={TasksIcon}
                path={'/'}
            />
            <PaginationButton
                color={"primary"}
                textField={"Избранные"}
                icon={FavoriteIcon}
                path={'/favourite-task'}
            />
            <PaginationButton
                color={"primary"}
                textField={"Completed"}
                icon={CompletedIcon}
                path={'/complete-task'}
            />
        </NavigationButtonBackground>
    );
}