import {FC} from "react";
import Badge from '@mui/material/Badge';

import css from './InfoMovies.module.css'
import {IOneMovieInfo} from "../../../interfaces";
import {noPoster, urls} from "../../../const";
import {MovieRait} from "../MovieContain/MovieRait";
import {GenresForMovie} from "./GenresForMovie";

interface IProps {
    oneMovie: IOneMovieInfo
}

export const InfoOneMovie: FC<IProps> = ({oneMovie}) => {
    const {
        overview,
        poster_path,
        title,
        vote_average,
        genres,
        original_language,
        budget,
        release_date,
        runtime,
        status,
        
    } = oneMovie
    return (
        <>
            <div className={css.GeneralBlock}>
                <div className={css.FirstBlock}>
                    <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}>
                        {poster_path ? <img className={css.Poster} src={`${urls.poster}/${poster_path}`} alt={title}/> :
                            <img className={css.Poster} src={noPoster} alt={title}/>}
                    </Badge>
                </div>

                <div className={css.SecondBlock}>
                    <div>

                        <div className={css.DescriptBlock}>
                            <h1>{title}</h1>
                            <div className={css.Reit}>
                                <MovieRait vote_average={vote_average}/>
                            </div>
                            <p><b>Original language:</b> {original_language}</p>
                            <p><b>Budget:</b> {budget}</p>
                            <p><b>Release date:</b> {release_date}</p>
                            <p><b>Status:</b> {status}</p>
                            <p><b>Runtime:</b> {runtime}</p>
                            <p><b>Overview:</b> {overview}</p>
                        </div>
                    </div>

                    <div className={css.GenresBlock}>
                        {
                            genres.map(genre => <GenresForMovie key={genre.id} genre={genre}/>)
                        }
                    </div>
                </div>

            </div>
        </>
    );
};

