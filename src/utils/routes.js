import MainPage from "../pages/MainPage/MainPage";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import NotFound from "../pages/NotFound/NotFound";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import SettingCategory from "../pages/SettingCategory/SettingCategory";

export const routes = [
    {
        id: 1,
        path: "/completed-task",
        component: CompletedTask,
        exact: true,
    },
    {
        id: 2,
        path: "/all-task",
        component: MainPage,
    },
    {
        id: 3,
        path: "/favourite-task",
        component: FavoritePage,
    },
    {
        id: 4,
        path: "/setting",
        component: SettingCategory,
    },
    {
        id: 5,
        path: "/*",
        component: NotFound,
    }

]
