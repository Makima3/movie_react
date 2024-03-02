import {FC} from "react";
import {ICast} from "../../interfaces";
import {urls} from "../../const";
import css from './Actors.module.css'

interface IProps {
    item: ICast
}

export const Actors: FC<IProps> = ({item}) => {
    const {name, profile_path} = item
    return (
        <div>
            <div>Name:{name}</div>
            <div>
                {profile_path ? <img src={`${urls.poster}/${profile_path}`} alt={name}/> :
                    <img  className={css.Image} src={"https://i.pinimg.com/736x/82/36/72/823672c13802854000931c67616b6f69.jpg"} alt={name}/>}
            </div>
        </div>
    );
};

