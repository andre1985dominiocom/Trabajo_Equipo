import { posts } from "../helper/posts.js";

export const createComments = ({
    id, userId, postsID, name, body }) => {
        return posts("Comments", {
            id,
            userId,
            postsID,
            name,
            body,
        });
    };