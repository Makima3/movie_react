import {FC} from "react";

import css from './OneMovie.module.css'
import {IMovie} from "../../../interfaces";
import {noPoster, urls} from "../../../const";
import {MovieRait} from "./MovieRait";

interface IProps {
    movie: IMovie
}

export const OneMovie: FC<IProps> = ({movie}) => {
    const {title, poster_path, vote_average, overview} = movie

    return (
        <div className={css.Card}>
            <div className={css.PosterImage}>
                <img src={poster_path ? `${urls.poster}/${poster_path}`: noPoster} alt={title}/>
            </div>
            <div className={css.Description}>
                <h2>{title}</h2>
                <div className={css.Overview}><p>{overview}</p></div>
                <MovieRait vote_average={vote_average}/>
            </div>
        </div>
    );
};

