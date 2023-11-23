    
const users = require('../models/User.model')

// Controller to create a new user
exports.store = async (req, res) => {
    try {
        res.json("User Creation");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get all users
exports.index = async (req, res) => {
    try {
        res.json("Get all users");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to get a single user
exports.get = async (req, res) => {
    try {
        res.json("Get a single user");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to delete a user
exports.destroy = async (req, res) => {
    try {
        res.json("Delete a user");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Controller to update a user
exports.update = async (req, res) => {
    try {
        res.json("Update a user");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
