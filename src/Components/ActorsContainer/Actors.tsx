import {FC} from "react";
import {ICast} from "../../interfaces";
interface IProps{
    item:ICast
}
export const Actors:FC<IProps> = ({item}) => {
    const {name}=item
    return (
        <div>
            <div>Name:{name}</div>
        </div>
    );
};

