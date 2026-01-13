const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorMiddleware");


const app = express();

app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use(errorHandler); 

app.get("/", (req, res) => {
    res.send("API is running");
});

module.exports = app;
