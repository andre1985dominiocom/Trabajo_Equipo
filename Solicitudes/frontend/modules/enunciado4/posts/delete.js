import { remove } from "../helper/delete.js";

export const deletePosts = (id) => {
    return remove(`Posts/${id}`);
};