import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie, IMovieInfo} from "../../../interfaces";
import {movieService} from "../../../services";
import {OneMovie} from "../MovieContain/OneMovie";
import css from './Movies.module.css'
import {PaginationMovies} from "./PaginationMovies";

export const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const [pagesNumber, setPagesNumber] = useState<number>(500)
    const page = query.get('page')

    useEffect(() => {
        movieService.getAll(page).then(({data}) => {
            setMovies(data.results)
            setPagesNumber(data.total_pages)
        })

    }, [page])

    return (
        <>
            <div className={css.Cards}>
                {
                    movies.map(movie => <OneMovie key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={css.Pagination}>
                <PaginationMovies setQuery={setQuery} page={page} pagesNumber={pagesNumber}/>
            </div>
        </>
    );
};

