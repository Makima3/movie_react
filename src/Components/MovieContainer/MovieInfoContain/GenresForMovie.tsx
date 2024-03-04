import {FC} from "react";
import {IGenre} from "../../../interfaces";

import css from './InfoMovies.module.css'

interface IProps {
    genre: IGenre
}

export const GenresForMovie: FC<IProps> = ({genre}) => {
    const {name} = genre
    return (
        <div>
            <div className={css.Genres}><h4>{name}</h4></div>
        </div>
    );
};



