import {useEffect, useState} from "react";
import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {OneMovie} from "../MovieContain/OneMovie";


export const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(()=> {
        movieService.getAll().then(({data: {results}})=> setMovies(results))
    },[])

    return (
        <div>
            {
                movies.map(movie => <OneMovie key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

