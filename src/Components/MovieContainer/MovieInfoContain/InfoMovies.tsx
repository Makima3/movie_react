import {FC, useEffect, useState} from "react";
import {ICast, IOneMovieInfo} from "../../../interfaces";
import {actorsService, movieService} from "../../../services";
import {Actors} from "../../ActorsContainer/Actors";
import {InfoOneMovie} from "./InfoOneMovie";

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
        <div>
            {
                actors.map(item => <Actors key={item.id} item={item}/>)
            }
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {oneMovie && <InfoOneMovie oneMovie={oneMovie}/>}
        </div>
    );
};

