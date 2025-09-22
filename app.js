const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

app.get("/", (req, res) => {
    res.send("Successfully!");
})

app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
});