import Pagination from '@mui/material/Pagination';
import {FC} from "react";
import {SetURLSearchParams} from "react-router-dom";


interface IProps {
setQuery: SetURLSearchParams
}
export const PaginationMovies: FC<IProps> = () => {
    return (
        <div>
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

