const express = require('express');
const router = express.Router();

const {
    getAllTask,
    createNewTask,
    changeTaskInfo,
    deleteAllTask,
    changeTaskCheckbox,
    deleteTask,
    changeTaskText,
    getAllTasks
} = require('../controllers/task.controller');

router.get('/tasks', getAllTasks);
router.post('/tasks', createNewTask);
router.patch('/tasks/:_id/text', changeTaskText );
router.patch('/tasks/:_id/checkbox', changeTaskCheckbox);
router.delete('/tasls/:_id', deleteTask);
router.delete('/tasks', deleteAllTask);

module.exports = router;