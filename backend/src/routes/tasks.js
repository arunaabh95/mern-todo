const router = require("express").Router();
const { getTasks, createTask, updateTask, deleteTask } = require("../controller/tasks");

//map the controllers to exposed rest endpoints
router.get("/tasks", getTasks);
router.post("/task", createTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

module.exports = router;