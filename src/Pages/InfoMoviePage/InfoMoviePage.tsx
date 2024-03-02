import {InfoMovies} from "../../Components";
import {useParams} from "react-router-dom";

export const InfoMoviePage = () => {
    const {id} = useParams<string>()

    return (
        <div>
            <InfoMovies id={id}/>
        </div>
    );
};

