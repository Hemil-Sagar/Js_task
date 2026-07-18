const express = require("express");
const router = express.Router();

const users = require("../data/users");

// GET /users
router.get("/", (req, res) => {
    res.json(users);
});

// GET /users/1
router.get("/:id", (req, res) => {

    const user = users.find(user => user.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);

});

module.exports = router;