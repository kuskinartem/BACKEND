const express = require('express');
const router = express.Router();
const {
  creatValidator,
  changeValidator,
  checkBox
} = require('../../helpers/validation');

const {
  createNewTask,
  deleteAllTask,
  changeTaskCheckbox,
  deleteTask,
  changeTaskText,
  getAllTasks
} = require('../controllers/task-controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', creatValidator , createNewTask);
router.patch('/tasks/:_id', changeValidator, changeTaskText);
router.patch('/tasks/:_id/checkbox',checkBox, changeTaskCheckbox);
router.delete('/tasks/:_id', deleteTask);
router.delete('/tasks', deleteAllTask);

module.exports = router;
