import {FC} from "react";
import {IGenre} from "../../../interfaces";
import css from './Genre.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    item: IGenre
}

export const Genre: FC<IProps> = ({item}) => {

    const {id, name} = item

    const navigate = useNavigate()

    return (
        <div>
            <div className={css.Genre} onClick={() => navigate(`${id}`)}><h1>{name}</h1></div>
        </div>
    );
};

