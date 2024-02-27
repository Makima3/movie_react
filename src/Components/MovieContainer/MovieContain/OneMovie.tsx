import {FC} from "react";


import {IMovie} from "../../../interfaces";
import {urls} from "../../../const";
interface IProps {
movie: IMovie
}
export const OneMovie: FC<IProps> = ({movie}) => {
    const { title,poster_path, vote_average} = movie

    return (
        <div>
            <img src={`${urls.poster}/${poster_path}`} alt={title}/>
            <div>{title}</div>
            <div>{vote_average}</div>

        </div>
    );
};

