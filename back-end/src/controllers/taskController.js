const Task = require("../models/Task");

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }

        const task = await Task.create({
            title,
            description,
            owner: req.user._id
        });

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const getTasks = async (req, res) => {
    try {
        const query =
            req.user.role === "admin" ? {} : { owner: req.user._id };

        const tasks = await Task.find(query).sort({ createdAt: -1 });

        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (
            req.user.role !== "admin" &&
            task.owner.toString() !== req.user._id.toString()
        ) {
            return res.status(403).json({ message: "Not allowed" });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};


const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        if (
            req.user.role !== "admin" &&
            task.owner.toString() !== req.user._id.toString()
        ) {
            return res.status(403).json({ message: "Not allowed" });
        }

        await task.deleteOne();
        res.json({ message: "Task deleted" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
