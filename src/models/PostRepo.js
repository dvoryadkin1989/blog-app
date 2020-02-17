const fs = require('fs');
const DB_FILE = "./resources/database.json";

class PostRepo {
    getAll() {
        return readFromFile();
    }

    persist(text) {
        const posts = this.getAll();
        const post = {
            id: nextId(posts),
            ...text
        };
        saveToFile([...posts, post]);
        return post;
    }

    delete(id) {
        const postsWithoutDeleted = this.getAll().filter(post => post.id !== id);
        saveToFile(postsWithoutDeleted);
    }

    update(post) {
        const posts = this.getAll();
        posts.find(p => p.id === post.id).text = post.text;
        saveToFile(posts);
    }
}

function nextId(posts) {
    return posts.length === 0 ? 1 : posts[posts.length - 1].id + 1;
}

function readFromFile() {
    // noinspection JSCheckFunctionSignatures
    return JSON.parse(fs.readFileSync(DB_FILE));
}

function saveToFile(posts) {
    fs.writeFileSync(DB_FILE, JSON.stringify(posts));
}

module.exports = new PostRepo();