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

router.post("/", (req, res) => {
    let data;
    try {
        data = postService.insert(req.body);

    } catch (e) {
        res.status(500).send({message: e.message});
    }
    res.send(data);
});

module.exports = router;