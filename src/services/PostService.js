const db = require("../models");

class PostService {
    getAll() {
        let data;
        try {
            data = db.postsRepo.getAll();
        } catch (e) {
            throw new Error("Some error");
        }
        return data;
    }

    insert(data) {
        return db.postsRepo.persist(data);
    }

    getById(id) {
        let posts;
        try {
            posts = db.postsRepo.getAll();
        } catch (e) {
            throw new Error("Some error");
        }
        const post = posts.find(post => post.id === Number(id));
        if (!post) {
            throw new Error({status: 500});
        }
        return post;
    }
}

module.exports = new PostService();