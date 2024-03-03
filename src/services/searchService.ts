import {IRes} from "../types";
import {IMovieInfo} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const searchService = {
    getByKeyword: (query: string, page: string): IRes<IMovieInfo> => axiosService.get(urls.search, {
        params: {
            query,
            page
        }
    })
}