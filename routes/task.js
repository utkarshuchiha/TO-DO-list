const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");
//http request along with controller
router.post("/add", taskController.addtask);
router.get("/delete/:id", taskController.delete);
router.get("/update/:id", taskController.update);

module.exports = router;
