import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  const filters = {};
  if (completed !== undefined) {
    filters.completed = completed === 'true';
  }

  const tasks = await taskService.getAllTasks(filters);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}
