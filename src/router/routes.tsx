import {
    ABOUT_ROUTE,
    // EQUATIONS_ROUTE,
    HOME_ROUTE,
    NOT_FOUND_ROUTE,
    // MULT_TABLE_ROUTE,
    TASK_MODES_ROUTE,
} from '../utils/routes'
import { Home } from '../pages/Home/Home'
import { About } from '../pages/About/About'
import { TaskModes } from '../pages/TaskModes/TaskModes'
import { NotFound } from '../pages/NotFound/NotFound'

export const routes = [
    {
        path: HOME_ROUTE,
        element: <Home />,
    },
    {
        path: ABOUT_ROUTE,
        element: <About />,
    },
    {
        path: TASK_MODES_ROUTE,
        element: <TaskModes />,
        // children: [
        //     {
        //         path: EQUATIONS_ROUTE,
        //     },
        //     {
        //         path: MULT_TABLE_ROUTE,
        //     },
        // ],
    },
    {
        path: NOT_FOUND_ROUTE,
        element: <NotFound />,
    },
]
