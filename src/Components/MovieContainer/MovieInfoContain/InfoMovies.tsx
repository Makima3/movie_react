import {FC, useEffect, useState} from "react";
import {ICast, IOneMovieInfo} from "../../../interfaces";
import {actorsService, movieService} from "../../../services";
import {Actors} from "../../ActorsContainer/Actors";
import {InfoOneMovie} from "./InfoOneMovie";
import css from './InfoMovies.module.css'

interface IProps {
    id: string
}

export const InfoMovies: FC<IProps> = ({id}) => {

    const [oneMovie, setOneMovie] = useState<IOneMovieInfo>()
    const [actors, setActors] = useState<ICast[]>([])

    useEffect(() => {
        movieService.getById(id).then(({data}) => setOneMovie(data))
        actorsService.getById(id).then(({data: {cast}}) => setActors(cast))
    }, [id])

    return (
        <>
            <div>
                {oneMovie && <InfoOneMovie oneMovie={oneMovie}/>}
            </div>
            <div className={css.Title}><h1>Main cast</h1></div>
            <div className={css.ActorCards}>
                {
                    actors.map(item => <Actors key={item.id} item={item}/>)
                }
            </div>
        </>
    );
};

