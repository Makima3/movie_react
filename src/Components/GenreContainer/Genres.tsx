import {useEffect, useState} from "react";
import {IGenre} from "../../interfaces";
import {genreService} from "../../services";
import {Genre} from "./Genre";

export const Genres = () => {

    const [genres, setGenres] = useState<IGenre[]>([])

    useEffect(()=> {
        genreService.getAll().then(({data: {genres}})=> setGenres(genres))
    },[])
    return (
        <div>
            {
                genres && genres.map(item => <Genre key={item.id} item={item}/>)
            }
        </div>
    );
};

