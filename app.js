const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.port || 3000;


app.get("/", (req, res) => {
    res.send("Successfully!");
})

app.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`);
});