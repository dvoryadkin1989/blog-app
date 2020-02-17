const fs = require('fs');

class PostRepo {
    getAll() {
        return JSON.parse(fs.readFileSync("./resources/database.json"));
    }

    persist(text) {
        const posts = this.getAll();
        const post = {
            id: nextId(posts),
            ...text
        };
        fs.writeFileSync("./resources/database.json", JSON.stringify([...posts, post]));
        return post;
    }
}

function nextId(posts) {
    return posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
}

module.exports = new PostRepo();