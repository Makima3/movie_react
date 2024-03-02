import {FC} from "react";
import {IOneMovieInfo} from "../../../interfaces";

interface IProps {
    oneMovie: IOneMovieInfo
}

export const InfoOneMovie: FC<IProps> = ({oneMovie}) => {
    const {overview} = oneMovie
    return (
        <div>
            <div>Title:{overview}</div>
        </div>
    );
};

