import axios from "axios";
import {baseURL} from "../const/urls";

export const axiosService = axios.create({baseURL})