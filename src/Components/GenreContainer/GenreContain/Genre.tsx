import {FC} from "react";
import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'

interface IProps{
    item:IGenre
}

export const Genre: FC<IProps> = ({item}) => {
    const { name} = item
    return (
        <div>
            <div className={css.Genre}><h1>{name}</h1></div>
        </div>
    );
};

