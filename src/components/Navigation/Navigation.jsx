import styled from "styled-components";

import {Button} from "@material-ui/core";
import {PaginationButton} from "../../forms/PaginationButton/PaginationButton";
import {NavigationButtonBackground} from "../../styled/NavigationButtonBackground";

import TasksIcon from "../../img/menu-book.svg";
import FavoriteIcon from "../../img/star-white.svg";
import CompletedIcon from "../../img/thumb-up.svg";
import SettingIcon from "../../img/settings.svg";

export const NavigationButton = () => {
    const tabsMenu = [
        {
            color: "primary",
            textField: "Все",
            icon: TasksIcon,
            path: '/all-task'

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
            path: '/completed-task'
        },
        {
            color: "primary",
            textField: "Setting",
            icon: SettingIcon,
            path: '/setting'
        }
    ]
    return (
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
    )
}