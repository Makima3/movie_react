import {Rating} from "@mui/material";
import {FC} from "react";
import StarIcon from '@mui/icons-material/Star';

interface IProps{
    vote_average: number
}

export const MovieRait: FC<IProps> = ({vote_average}) => {
    return (
        <div>
            <Rating name="half-rating-read" value={vote_average} max={10}
                    emptyIcon={<StarIcon style={{opacity: 0.5, color: 'gray'}}/>}
            />
        </div>
    );
};

