import { posts } from "../helper/posts.js";

export const createPosts = ({
    id, userId, title, body }) => {
        return posts("Posts", {
            id,
            userId,
            title,
            body,
        });
    };