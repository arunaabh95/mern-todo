const Task = require("../models/Task");

// make a controller for handle all requests
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}).sort({ createdAt: 1 });

    try {
      res.status(200).json({
        message: "Get all tasks successfully.",
        tasks: tasks,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// make a controller for create a task
const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json({
      message: "Create a new task successfully.",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
  
};

// make a controller for update a task
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndUpdate(taskId, req.body, { new: true, runValidators: true });

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    } else {
      res.status(200).json({
        msg: `task with id: ${taskId} updated successfully.`,
        task: task,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// make a controller for delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);

    if (!task) {
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    } else {
      res.status(200).json({
        message: `task with id: ${taskId} deleted successfully.`,
        task: task,
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {getTasks, createTask, updateTask, deleteTask};