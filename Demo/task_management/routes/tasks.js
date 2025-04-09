const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.post('/', auth, async (req, res) => {
  const task = new Task({ ...req.body, assignedTo: req.user.id });
  await task.save();
  res.json(task);
});

router.get('/', auth, async (req, res) => {
  const tasks = await Task.find({ assignedTo: req.user.id });
  res.json(tasks);
});

router.get('/:id', auth, async (req, res) => {
  const task = await Task.findOne({ _id: req.params.id, assignedTo: req.user.id });
  if (!task) return res.status(404).json({ msg: 'Task not found' });
  res.json(task);
});

router.put('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, assignedTo: req.user.id },
    req.body,
    { new: true }
  );
  if (!task) return res.status(404).json({ msg: 'Task not found' });
  res.json(task);
});

router.delete('/:id', auth, async (req, res) => {
  const task = await Task.findOneAndDelete({ _id: req.params.id, assignedTo: req.user.id });
  if (!task) return res.status(404).json({ msg: 'Task not found' });
  res.json({ msg: 'Task deleted' });
});

module.exports = router;