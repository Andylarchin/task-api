import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  // Build an optional filter from the validated query parameter.
  // When ?completed is omitted, no filter is applied and all tasks are returned.
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
