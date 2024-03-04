import {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {OneMovie} from "../MovieContain/OneMovie";
import css from './Movies.module.css'
import {PaginationMovies} from "./PaginationMovies";

interface IProps {
    movies: IMovie[]
    setQuery: SetURLSearchParams
    pagesNumber: number
    page: string
}

export const Movies: FC<IProps> = ({movies, setQuery, page, pagesNumber}) => {

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

