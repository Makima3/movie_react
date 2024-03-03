import {IGenres, IMovieInfo} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const genreService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre),
    getMovies: (page: string, with_genres: string): IRes<IMovieInfo> => axiosService.get(urls.movies, {
        params: {
            page,
            with_genres
        }
    })
}