import {FC} from "react";
import {IOneMovieInfo} from "../../../interfaces";
import {urls} from "../../../const";

interface IProps {
    oneMovie: IOneMovieInfo
}

export const InfoOneMovie: FC<IProps> = ({oneMovie}) => {
    const {overview, poster_path, title} = oneMovie
    return (
        <div>
            <div>Title:{overview}</div>
            {poster_path ? <img src={`${urls.poster}/${poster_path}`} alt={title}/> :
                <img src={'https://i.pinimg.com/736x/be/aa/4b/beaa4b06ec621368d665eccc509c42c0.jpg'} alt={title}/>}
        </div>
    );
};

