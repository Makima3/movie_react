import {SearchForm,} from "../../Components";
import {Outlet} from "react-router-dom";

export const Search = () => {
    return (
        <div>
            <SearchForm/>
            <Outlet/>
        </div>
    );
};
