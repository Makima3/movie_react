import {IMovieInfo, IOneMovieInfo} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const movieService = {
        getAll : (page: string): IRes<IMovieInfo> => axiosService.get(urls.movies, {params: {page}}),
        getById: (id: string): IRes<IOneMovieInfo> =>axiosService.get(urls.movie.byId(id))
}