import {IGenres} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const genreService = {
    getAll: (): IRes<IGenres> => axiosService.get(urls.genre)
}