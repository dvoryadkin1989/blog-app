const db = require("../models");

class PostService {
    getAll() {
        let data;
        try {
            data = db.posts
        } catch (e) {
            throw new Error("Some error");
        }
        return data;
    }

    insert(data) {
        const post = {
            ...data,
            id: db.posts.length + 1
        };
        db.posts.push(post);
        return post
    }
}

module.exports = new PostService();