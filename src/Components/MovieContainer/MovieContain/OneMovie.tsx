import {FC} from "react";

import css from './OneMovie.module.css'
import {IMovie} from "../../../interfaces";
import {noPoster, urls} from "../../../const";
import {MovieRait} from "./MovieRait";
import {useNavigate} from "react-router-dom";


interface IProps {
    movie: IMovie
}

export const OneMovie: FC<IProps> = ({movie}) => {

    const {id, title, poster_path, vote_average, overview} = movie

    const navigate = useNavigate()

    return (
        <div className={css.Card} onClick={() => navigate(`/movie/${id}`)}>
            <div className={css.PosterImage}>
                {poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
                    <img className={css.NoPoster} src={noPoster} alt={title}/>}
            </div>
            <div className={css.Description}>
                <h2>{title}</h2>
                <div className={css.Overview}><p>{overview}</p></div>
                <MovieRait vote_average={vote_average}/>
            </div>
        </div>
    );
};

