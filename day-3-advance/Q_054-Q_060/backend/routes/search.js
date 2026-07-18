const express = require("express");
const router = express.Router();

const users = require("../data/users");

router.get("/", (req, res) => {

    const { name } = req.query;

    if (!name) {
        return res.json(users);
    }

    const result = users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );

    res.json(result);

});

module.exports = router;