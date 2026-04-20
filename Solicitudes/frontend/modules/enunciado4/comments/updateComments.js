import { posts } from "../helper/posts.js";

export const updateComments = ({
    id, userId, postsID, name, body }) => {
        return posts(`Comments/${id}` , {
            id,
            userId,
            postsID,
            name,
            body,
        });
};