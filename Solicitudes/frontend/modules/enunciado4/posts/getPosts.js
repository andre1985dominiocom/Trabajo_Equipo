import { get } from "../helper/get.js";

export const getPosts = () => {
    return get(`posts`);
}