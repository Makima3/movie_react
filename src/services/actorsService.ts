import {IRes} from "../types";
import {IActors} from "../interfaces";
import {axiosService} from "./axiosService";
import {urls} from "../const";

export const actorsService = {
    getById: (id: string): IRes<IActors> => axiosService.get(urls.actors.byId(id))
}