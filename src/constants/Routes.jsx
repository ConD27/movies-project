import { useRoutes } from "react-router-dom";

import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { MovieProfile } from "../pages/MovieProfile";
import { NotFound } from "../pages/NotFound";

function Routes () {

    const routes = useRoutes([

        { path:'/', element:<Home/> },
        { path:'/about', element:<About/> },
        { path:'/contact', element:<Contact/> },
        { path:'/movie-profile', element:<MovieProfile/> },
        { path:'*', element:<NotFound/> }

    ]);

    return routes;

}

export default Routes;