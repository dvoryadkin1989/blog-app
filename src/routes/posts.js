const express = require("express");
const router = express.Router();

const postService = require("../services/PostService");

router.get("/", (req, res) => {
    let data;
    try {
        data = postService.getAll();
    } catch (e) {
        res.status(500).send({message: e.message});
    }
    res.send(data);
});

router.get("/:id", (req, res) => {
    let data;
    try {
        data = postService.getById(req.params.id);
    } catch (e) {
        res.status(500).send({message: e.message});
    }
    res.send(data);
});

router.post("/", (req, res) => {
    let data;
    try {
        data = postService.insert(req.body);
    } catch (e) {
        res.status(500).send({message: e.message});
    }
    res.send(data);
});

router.delete("/:id", (req, res) => {
    try {
        postService.deleteById(req.params.id);
    } catch (e) {
        res.status(500).send({message: e.message});
    }
    res.send("ok");
});

module.exports = router;