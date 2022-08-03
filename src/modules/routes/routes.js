const express = require('express');
const router = express.Router();
const createValidator = require('../../helpers/validation');

const {
  createNewTask,
  deleteAllTask,
  changeTaskCheckbox,
  deleteTask,
  changeTaskText,
  getAllTasks
} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', createValidator , createNewTask);
router.patch('/tasks/:_id', changeTaskText);
router.patch('/tasks/:_id/checkbox', changeTaskCheckbox);
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteAllTask);

module.exports = router;
