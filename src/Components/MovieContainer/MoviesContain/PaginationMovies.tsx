import Pagination from '@mui/material/Pagination';
export const PaginationMovies= () => {
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

