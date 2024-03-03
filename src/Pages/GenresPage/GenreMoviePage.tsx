import {useParams} from "react-router-dom";

export const GenreMoviePage = () => {
    const {id}=useParams<string>()
    return (
        <div>
            App
        </div>
    );
};

