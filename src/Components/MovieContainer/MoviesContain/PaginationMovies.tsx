import Pagination from '@mui/material/Pagination';
import {FC} from "react";

import css from './Movies.module.css'

interface IProps {

}
export const PaginationMovies: FC<IProps> = () => {
    return (
        <div className={css.Pagination}>
            <Pagination count={500}
                        boundaryCount={2}
                        shape="rounded"
                        size={'large'}
                        color={'primary'}
                        variant="outlined"
            />
        </div>

    );
};

