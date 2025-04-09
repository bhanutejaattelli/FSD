exports.createTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const task = new Task({
            title,
            description,
            status,
            dueDate,
            assignedTo: req.user.id
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ assignedTo: req.user.id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task || task.assignedTo.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const { title, description, status, dueDate } = req.body;
        const task = await Task.findById(req.params.id);
        if (!task || task.assignedTo.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.title = title || task.title;
        task.description = description || task.description;
        task.status = status || task.status;
        task.dueDate = dueDate || task.dueDate;
        await task.save();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task || task.assignedTo.toString() !== req.user.id) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await task.remove();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};