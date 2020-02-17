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

    deleteById(id) {
        try {
            db.postsRepo.delete(Number(id));
        } catch (e) {
            throw new Error("Some error");
        }
    }

    update(id, text) {
        const updatedPost = {
            id: Number(id),
            ...text
        };
        db.postsRepo.update(updatedPost);
    }
}

module.exports = new PostService();