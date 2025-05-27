const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000;

const tasksFile = path.join(__dirname, 'tasks.json');

const publicPath = path.join(__dirname,'public');
app.use(express.static(publicPath));
app.use(express.json());

// Helper to read tasks
async function readTasks() {
  const data = await fs.readFile(tasksFile, 'utf-8');
  return JSON.parse(data);
}

// Helper to write tasks
async function writeTasks(tasks) {
  await fs.writeFile(tasksFile, JSON.stringify(tasks));
}

// GET all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await readTasks();
    res.send(tasks);
  } catch (err) {
    console.error('Error reading tasks:', err);
    res.status(500).send('Internal Server Error');
  }
});

// ADD new task
app.post('/tasks', async (req, res) => {
  try {
    const newTask = req.body; // expects { text: 'Task text', completed: false }
    const tasks = await readTasks();
    newTask.id = Date.now(); // Assign unique ID
    tasks.push(newTask);
    await writeTasks(tasks);
    res.status(201).send('Task added successfully');
  } catch (err) {
    console.error('Error adding task:', err);
    res.status(500).send('Internal Server Error');
  }
});

// DELETE task by ID
app.delete('/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const tasks = await readTasks();
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    if (filteredTasks.length === tasks.length) {
      return res.status(404).send('Task not found');
    }
    await writeTasks(filteredTasks);
    res.send('Task deleted successfully');
  } catch (err) {
    console.error('Error deleting task:', err);
    res.status(500).send('Internal Server Error');
  }
});

// UPDATE task by ID (e.g., mark as completed)
app.put('/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  const updatedData = req.body;
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return res.status(404).send('Task not found');

    tasks[index] = { ...tasks[index], ...updatedData };
    await writeTasks(tasks);
    res.send('Task updated successfully');
  } catch (err) {
    console.error('Error updating task:', err);
    res.status(500).send('Internal Server Error');
  }
});

// EDIT task text only
app.patch('/tasks/:id/edit', async (req, res) => {
  const taskId = parseInt(req.params.id);
  const { text } = req.body;
  try {
    const tasks = await readTasks();
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return res.status(404).send('Task not found');

    tasks[index].text = text;
    await writeTasks(tasks);
    res.send('Task text edited successfully');
  } catch (err) {
    console.error('Error editing task:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});