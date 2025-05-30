const express = require('express');
const app = express();
const port = 4000;
const fs = require('fs/promises');
const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use(express.json()); // Middleware to parse JSON bodies
app.get('/tasks', (req, res) => {
  fs.readFile(path.join(__dirname, 'tasks.json'), { encoding: 'utf-8' })
    .then((data) => {
      const tasks = JSON.parse(data);
      res.send(tasks);
    })
    .catch((err) => {
      console.error('Error reading tasks:', err);
      res.status(500).send('Internal Server Error');
    });
})

app.post('/tasks', (req, res) => {
  const newTasks = req.body.tasks;
  console.log(req.body);
  fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(newTasks))
    .then(() => {
      res.status(200).send('Tasks added successfully');
    })
    .catch((err) => {
      console.error('Error writing tasks:', err);
      res.status(500).send('Internal Server Error');
    });
})

// DELETE task by ID
app.delete('/tasks/:id', async (req, res) => {
  const taskId = parseInt(req.params.id);
  try {
    const data = await fs.readFile(path.join(__dirname, 'tasks.json'), { encoding: 'utf-8' });
    const tasks = JSON.parse(data); 
    const filteredTasks = tasks.filter(task => task.id !== taskId);

    if (filteredTasks.length === tasks.length) {
      return res.status(404).send('Task not found');
    }

    await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(filteredTasks, null, 2));
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
    const tasks = await fs.readFile(path.join(__dirname, 'tasks.json'), { encoding: 'utf-8' });
    const index = tasks.findIndex(task => task.id === taskId);
    if (index === -1) return res.status(404).send('Task not found');

    tasks[index].text = text;
    await fs.writeFile(path.join(__dirname, 'tasks.json'), JSON.stringify(tasks, null, 2));
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