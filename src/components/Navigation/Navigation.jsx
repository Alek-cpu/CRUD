import styled from "styled-components";

import {Button} from "@material-ui/core";
import {PaginationButton} from "../../forms/PaginationButton/PaginationButton";
import {NavigationButtonBackground} from "../../styled/NavigationButtonBackground";

import TasksIcon from "../../img/menu-book.svg";
import FavoriteIcon from "../../img/star-white.svg";
import CompletedIcon from "../../img/thumb-up.svg";

const tabsMenu = [
    {
        color: "primary",
        textField: "Главная",
        icon: TasksIcon,
        path: '/home'
    },
    {
        color: "primary",
        textField: "Избранные",
        icon: FavoriteIcon,
        path: '/favourite-task'
    },
    {
        color: "primary",
        textField: "Completed",
        icon: CompletedIcon,
        path: '/complete-task'
    }
]

export const NavigationButton = () =>
    <NavigationButtonBackground>
        {
            tabsMenu.map(({color, textField, icon, path}) =>
                <PaginationButton
                    color={color}
                    textField={textField}
                    icon={icon}
                    path={path}
                />
            )
        }
    </NavigationButtonBackground>