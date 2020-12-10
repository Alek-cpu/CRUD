import MainPage from "../pages/MainPage/MainPage";
import FavoritePage from "../pages/FavoritePage/FavoritePage";
import NotFound from "../pages/NotFound/NotFound";
import ComplitedTask from "../pages/CompletedTask/ComplitedTask";

export const routes = [
    {
        id: 1,
        path: '/home',
        component: MainPage,
        exact: true,
    },
    {
        id: 2,
        path: '/favourite-task',
        component: FavoritePage,
    },
    {
        id: 4,
        path: '/complete-task',
        component: ComplitedTask,
    },
    {
        id: 4,
        path: '*',
        component: NotFound,
    },

]
