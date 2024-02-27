import {FC} from "react";

import css from './OneMovie.module.css'
import {IMovie} from "../../../interfaces";
import {urls} from "../../../const";
interface IProps {
movie: IMovie
}
export const OneMovie: FC<IProps> = ({movie}) => {
    const { title,poster_path, vote_average, overview} = movie

    return (
        <div className={css.Card}>
            <div className={css.PosterImage}>
                <img src={`${urls.poster}/${poster_path}`} alt={title}/>
            </div>
            <div className={css.Description}>
                <h2>{title}</h2>
                <div className={css.Overview}><p>{overview}</p></div>
                {/*<p>Release date - {release_date}</p>*/}
                <p>{vote_average}</p>
            </div>
        </div>
    );
};

