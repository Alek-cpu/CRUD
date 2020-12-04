import {PaginationButton} from "../../forms/button/PaginationButton";
import styled from "styled-components";
import TasksIcon from "../../img/menu-book.svg";
import FavoriteIcon from "../../img/star-white.svg";
import {Button} from "@material-ui/core";
import {StyledNavigationButtonBackground} from "../../styled/styledNavigationButtonBackground";

export const NavigationButton = () => {
    return(
        <StyledNavigationButtonBackground>
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
        </StyledNavigationButtonBackground>
    );
}