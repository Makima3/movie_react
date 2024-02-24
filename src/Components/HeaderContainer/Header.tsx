import {NavLink} from "react-router-dom";
import css from './Header.module.css'

export const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'movie'}>Movies</NavLink>
            <NavLink to={'genre'}>Genges</NavLink>
            <NavLink to={'search'}>Search</NavLink>
        </div>
    );
};

