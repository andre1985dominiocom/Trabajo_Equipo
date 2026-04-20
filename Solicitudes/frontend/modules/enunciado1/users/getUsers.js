import { get } from "../helper/get.js";

export const getUsers = () => {
    return get("users");
};