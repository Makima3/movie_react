import {SearchForm,} from "../../Components";
import {Outlet} from "react-router-dom";
import css from './Search.module.css'

export const Search = () => {
    return (
        <div className={css.GeneralBlock}>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};
