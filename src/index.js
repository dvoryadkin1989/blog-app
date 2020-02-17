const express = require("express");
const postRouter = require("./routes/posts");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

app.get("/api/v0.1/status", (req, res) => {
    res.send({
        status: "ok"
    });
});
app.use(bodyParser.json());
app.use("/api/v0.1/posts", postRouter);


app.listen(port, () => {
    console.log(`app is ready on port ${port}`);
});