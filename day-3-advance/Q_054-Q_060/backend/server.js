const express = require("express");
const cors = require("cors");
const path = require("path");

const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const commentsRoute = require("./routes/comments");
const searchRoute = require("./routes/search");

const app = express();

const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve frontend files (optional if you're using http-server)
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.use("/comments", commentsRoute);
app.use("/search", searchRoute);

// Home Route (optional)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});