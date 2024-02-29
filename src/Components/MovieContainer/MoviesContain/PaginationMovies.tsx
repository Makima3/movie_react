import React, {ChangeEvent, FC} from "react";
import Pagination from '@mui/material/Pagination';
import {SetURLSearchParams} from "react-router-dom";

interface IProps {
    setQuery: SetURLSearchParams
    page: string
    pagesNumber: number
}

export const PaginationMovies: FC<IProps> = ({setQuery, page, pagesNumber}) => {


    const change = (event: ChangeEvent<unknown>, page: number) => {
        setQuery({page: `${page}`})
        window.scroll(0, 0)
    }

    return (
        <div>
            <Pagination page={+page} onChange={change}
                        count={pagesNumber}
                        boundaryCount={2}
                        shape="rounded"
                        size={'large'}
                        color={'primary'}
                        variant="outlined"
            />
        </div>

    );
};

