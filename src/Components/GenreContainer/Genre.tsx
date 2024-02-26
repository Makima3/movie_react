import {FC} from "react";
import {IGenre} from "../../interfaces";

interface IProps{
    item:IGenre
}

export const Genre: FC<IProps> = ({item}) => {
    const {id, name} = item
    return (
        <div>
            <div>ID: {id}</div>
            <div>Name: {name}</div>
        </div>
    );
};

