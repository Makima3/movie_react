import {useParams, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {genreService} from "../../services";
import {Movies} from "../../Components";

export const GenreMoviePage = () => {

    const {id} = useParams<string>()
    const [genresMovie, setGenresMovie] = useState<IMovie[]>([])
    const [query, setQuery] = useSearchParams({page: '1'})
    const [pagesNumber, setPagesNumber] = useState<number>(500)
    const page = query.get('page')

    useEffect(() => {
        genreService.getMoviesByGenres(page, id).then(({data}) => {
            setGenresMovie(data.results)
            setPagesNumber(data.total_pages)
        })
    }, [page, id])

    return (
        <div>
            <Movies movies={genresMovie} setQuery={setQuery} pagesNumber={pagesNumber} page={page}/>
        </div>
    );
};

