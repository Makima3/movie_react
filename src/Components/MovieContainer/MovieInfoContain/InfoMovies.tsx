import {FC, useEffect, useState} from "react";
import {ICast, IOneMovieInfo} from "../../../interfaces";
import {actorsService, movieService} from "../../../services";

interface IProps {
    id: string
}

export const InfoMovies: FC<IProps> = ({id}) => {

    const [oneMovie, setOneMovie] = useState<IOneMovieInfo>(null)
    const [actors, setActors] = useState<ICast[]>([])

    useEffect(() => {
        movieService.getById(id).then(({data}) => setOneMovie(data))
        actorsService.getById(id).then(({data: {cast}}) => setActors(cast))
    }, [id])

    return (
        <div>
            {

            }
        </div>
    );
};

