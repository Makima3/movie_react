import {useEffect, useState} from "react";

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {OneMovie} from "../MovieContain/OneMovie";
import css from './Movies.module.css'


export const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(()=> {
        movieService.getAll().then(({data: {results}})=> setMovies(results))
    },[])

    return (
        <div className={css.Cards}>
            {
                movies.map(movie => <OneMovie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

