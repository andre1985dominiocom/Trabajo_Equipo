import { get } from "../helper/get.js";

export const getUsersByID = (id) => {
    return get(`users/${id}`);
};