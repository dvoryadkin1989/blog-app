const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/api/v0.1/status", (req, res) => {
    res.send({
        status: "ok"
    });
});

app.listen(port, () => {
    console.log(`app is ready on port ${port}`);
});