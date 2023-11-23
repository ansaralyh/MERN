const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post("/", userController.store);
router.get("/", userController.index);
router.get("/:id", userController.get);
router.delete("/:id", userController.destroy);
router.put("/:id", userController.update);

module.exports = router;
