import {Movies} from "../../Components";
import {useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {movieService} from "../../services";

export const MoviePage = () => {

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
        <div>
            <Movies movies={movies} page={page} setQuery={setQuery} pagesNumber={pagesNumber} />
        </div>
    );
};

