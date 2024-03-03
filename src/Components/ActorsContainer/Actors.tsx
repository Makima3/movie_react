import {FC} from "react";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {ICast} from "../../interfaces";
import {noImage, urls} from "../../const";
import css from './Actors.module.css'

interface IProps {
    item: ICast
}

const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => e.preventDefault();
export const Actors: FC<IProps> = ({item}) => {
    const {name, profile_path} = item

    return (
        <div>
            <div onDragStart={handleDragStart}>
                {profile_path ? <img src={`${urls.poster}/${profile_path}`} alt={name}/> :
                    <img className={css.Image} src={noImage} alt={name}/>}
                <div>Name:{name}</div>
            </div>
        </div>
    );
};

