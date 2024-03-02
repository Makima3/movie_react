import {FC} from "react";
import {ICast} from "../../interfaces";
import {noImage, urls} from "../../const";
interface IProps{
    item:ICast
}
export const Actors:FC<IProps> = ({item}) => {
    const {name, profile_path}=item
    return (
        <div>
            <div>Name:{name}</div>
            {profile_path ? <img src={ `${urls.poster}/${profile_path}`} alt={name}/>  : <img src={noImage} alt={name}/>}
        </div>
    );
};

