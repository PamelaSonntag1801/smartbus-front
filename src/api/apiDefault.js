import axios from "axios";

export const apiDefault = axios.create({
    baseURL: "http://localhost:8000/api",
});