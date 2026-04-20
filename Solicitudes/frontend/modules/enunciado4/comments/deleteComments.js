import { remove } from "../helper/index.js";

export const deleteComments = (id) => {
    return remove(`Comments/${id}`);
};