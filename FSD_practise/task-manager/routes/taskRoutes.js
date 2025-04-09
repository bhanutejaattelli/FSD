const express = require('express');
const Task = require('../models/Task');
const auth = require('../middleware/auth');
const router = express.Router();

// Create Task
router.post('/', auth, async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  try {
    const task = new Task({
      title,
      description,
      status,
      dueDate,
      assignedTo: req.user.id
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get All Tasks
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ assignedTo: req.user.id });
    res.json(tasks);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Get Task by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Update Task
router.put('/:id', auth, async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, assignedTo: req.user.id },
      { title, description, status, dueDate },
      { new: true }
    );
    if (!task) return res.status(404).json({ msg: 'Task not found or unauthorized' });
    res.json(task);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Delete Task
router.delete('/:id', auth, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Task not found or unauthorized' });
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
