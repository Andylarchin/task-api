import prisma from '../config/db.js';

// Find all tasks, optionally filtered by completion status.
// filters: { completed?: boolean }
export async function findAll(filters = {}) {
  const where = {};

  if (typeof filters.completed === 'boolean') {
    where.completed = filters.completed;
  }

  return prisma.task.findMany({ where });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
