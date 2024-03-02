import {FC} from "react";
import {ICast} from "../../interfaces";
import { urls} from "../../const";
interface IProps{
    item:ICast
}
export const Actors:FC<IProps> = ({item}) => {
    const {name, profile_path}=item
    return (
        <div>
            <div>Name:{name}</div>
            {profile_path ? <img src={ `${urls.poster}/${profile_path}`} alt={name}/>  : <img src={"https://i.pinimg.com/564x/08/09/52/080952b59218cced1037adbc254819b5.jpg"} alt={name}/>}
        </div>
    );
};

