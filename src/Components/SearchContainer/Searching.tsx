import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces";
import {useSearchParams} from "react-router-dom";
import {Movies} from "../MovieContainer/MoviesContain/Movies";
import {searchService} from "../../services";

interface IProps {
    keyword: string
}

export const Searching: FC<IProps> = ({keyword}) => {

    const [movies, setMovies] = useState<IMovie[]>([])
    const [query, serQuery] = useSearchParams({page: '1'})
    const [pagesNumber, setPagesNumber] = useState<number>()
    const page = query.get('page')

    useEffect(() => {
        searchService.getByKeyword(keyword, page).then(({data}) => {
            setMovies(data.results)
            setPagesNumber(data.total_pages)
        })
    }, [keyword, page])
    return (
        <div>
            <Movies movies={movies} setQuery={serQuery} page={page} pagesNumber={pagesNumber}/>
        </div>
    );
};

