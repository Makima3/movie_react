import {NavLink} from "react-router-dom";
import css from './Header.module.css'
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SvgIcon from "@mui/icons-material/AccountCircleSharp";

export const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.Links}>
                <NavLink to={'movie'}>Movies</NavLink>
                <NavLink to={'genre'}>Genres</NavLink>
                <NavLink to={'search'}>Search</NavLink>
            </div>
            <div className={css.Icon}>
                <SvgIcon fontSize="large">
                    <AccountCircleSharpIcon/>
                </SvgIcon>
                <div className={css.Name}>
                <p>Gojo</p>
                <p>Satoru</p>
                </div>
            </div>
        </div>
    );
};

