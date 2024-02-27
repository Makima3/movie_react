import {IMovieInfo} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const movieService = {
        getAll : (): IRes<IMovieInfo> => axiosService.get(urls.movies)
}