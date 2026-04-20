import { patch } from "../helper/patch.js";

export const patchPosts = (id, data) => {
    return patch(`Posts/${id}`, data);
};