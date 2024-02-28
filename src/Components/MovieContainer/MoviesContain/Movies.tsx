import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {OneMovie} from "../MovieContain/OneMovie";
import css from './Movies.module.css'
import { PaginationMovies} from "./PaginationMovies";

export const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page')

    useEffect(()=> {
        movieService.getAll(page).then(({data: {results}})=> setMovies(results))
    },[page])

    return (
        <>
        <div className={css.Cards}>
            {
                movies.map(movie => <OneMovie key={movie.id} movie={movie}/>)
            }
        </div>
    <div className={css.Pagination}>
        <PaginationMovies setQuery={setQuery}/>
    </div>
        </>
    );
};

