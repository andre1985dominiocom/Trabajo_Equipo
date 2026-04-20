import { put } from "../helper/put.js";

export const updatePosts = (id, data) => {
    return put(`Posts/${id}`, data);
};