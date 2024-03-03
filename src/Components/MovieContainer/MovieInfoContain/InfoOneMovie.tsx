import {FC} from "react";
import {IOneMovieInfo} from "../../../interfaces";
import {noPoster, urls} from "../../../const";

interface IProps {
    oneMovie: IOneMovieInfo
}

export const InfoOneMovie: FC<IProps> = ({oneMovie}) => {
    const {overview, poster_path, title} = oneMovie
    return (
        <div>
            <div>Title:{overview}</div>
            {poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
                <img src={noPoster} alt={title}/>}
        </div>
    );
};

