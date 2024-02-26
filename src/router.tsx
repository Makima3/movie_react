import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Genre, MoviePage, Search} from "./Pages";

export const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviePage/>},
            {path: 'genre', element: <Genre/>},
            {path: 'search', element: <Search/>}
        ]}

])
