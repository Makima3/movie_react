import {FC} from "react";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {ICast} from "../../interfaces";
import {noImage, urls} from "../../const";
import css from './Actors.module.css'

interface IProps {
    item: ICast
}

export const Actors: FC<IProps> = ({item}) => {
    const {name, profile_path} = item

    return (
        <div>
            <div className={css.Actor}>
                {profile_path ? <img src={`${urls.poster}/${profile_path}`} alt={name} className={css.Image}/> :
                    <img className={css.Image} src={noImage} alt={name}/>}
                <div><p>{name}</p></div>
            </div>
        </div>
    );
};

