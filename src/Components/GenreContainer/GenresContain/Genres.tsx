import {useEffect, useState} from "react";
import {IGenre} from "../../../interfaces";
import {genreService} from "../../../services";
import {Genre} from "../GenreContain/Genre";
import css from './Genres.module.css'

export const Genres = () => {

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(()=> {
        genreService.getAll().then(({data: {genres}})=> setGenres(genres))
    },[])
    return (
        <div className={css.Genres}>
            {
                genres && genres.map(item => <Genre key={item.id} item={item}/>)
            }
        </div>
    );
};

