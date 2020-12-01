import {PaginationButton} from "../../forms/button/PaginationButton";
import styled from "styled-components";
import TasksIcon from "../../img/wysiwyg-24px.svg";
import FavoriteIcon from "../../img/star-white.svg";
import {Button} from "@material-ui/core";

const NavigationButtonBackground = styled.div`
    display: flex;
    gap: 10px;
`;

export const NavigationButton = () => {
    return(
        <NavigationButtonBackground>
            <PaginationButton
                color={"primary"}
                textField={"Главная"}
                icon={TasksIcon}
                path={'/alltask'}//Вывести роуты в отделенный файл
            />
            <PaginationButton
                color={"primary"}
                textField={"Избранные"}
                icon={FavoriteIcon}
                path={'/favourite-task'}//Вывести роуты в отделенный файл
            />
        </NavigationButtonBackground>
    );
}