import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts";
import {Genre, GenreMoviePage, InfoMoviePage, MoviePage, Search} from "./Pages";

export const router = createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {index:true, element:<Navigate to={'movie'}/>},
            {path: 'movie', element: <MoviePage/>},
            {path: 'movie/:id', element:<InfoMoviePage/>},
            {path: 'genre', element: <Genre/>},
            {path: 'genres/:id', element:<GenreMoviePage/>},
            {path: 'search', element: <Search/>}

        ]}
])
