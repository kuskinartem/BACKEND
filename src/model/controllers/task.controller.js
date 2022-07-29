const Task = require('../../modules/task');

const validationString = require('../../helpers/validation.js');

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).send(allTasks);
  } catch (error) {
      res.status(400).send('Task retrieval error');
  }
};
  
const createNewTask = async (req, res) => {
  try {
    const task =  req.body.text;

    if (!req.body.hasOwnProperty('text') || !validationString(text)) {
      throw new Error();
    };

    const newTask = new Task ({text});
    const result = await newTask.save();
    res.status(200).send(result);
  } catch(error) {
      res.status(400).send('Task send error')
    }
  };

const deleteTask = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!req.params.hasOwnProperty('_id') || _id === "") {
      throw new Error();
    };

    const deleteTask = await Task.deleteOne ({ _id });
    res.status(200).send(deleteTask);
  } catch(error) {
      res.status(400).send('Failed delete task')
  }
};

  
const changeTaskText = async (req, res) => {
  try {
    const _id = await req.params._id;
    const text =  req.body.text;

    if(!req.params.hasOwnProperty('_id') 
      || _id === ''
      || !req.body.hasOwnProperty('text')
      || !validationString(text)) {
        throw new Error();
    };
    const task = await Task.findOneAndUpdate(
    { _id },
    { $set: { text } },
    { new: true },
    );
    res.status(200).send(task);
  } catch (error) {
      res.status(400).send('Fail to change');
  }
};

const changeTaskCheckbox = async (req, res) => {
  try {
    const _id = await req.params._id;
    const isCheck = req.body.isCheck;

    if (!req.params.hasOwnProperty('_id') 
      || _id === ''
      || !req.body.hasOwnProperty('isCheck')
      || typeof isCheck !== 'boolean') {
      throw new Error();
    };
    const task = await Task.findOneAndUpdate(
      { _id },
      { $set: { isCheck } },
      { new: true },
    );
    res.status(200).send(task);
  } catch (error) {
      res.status(400).send('Fail to change');
  }
}
  
const deleteAllTask = async (req, res) => {
  try {
    const result = await Task.deleteMany({});
    res.status(200).send(result);
  } catch(error) {
    res.status(400).send('Fail delete tasks');
  }
};
  
module.exports = {
  deleteAllTask,
  createNewTask,
  getAllTasks,
  deleteTask,
  changeTaskCheckbox,
  changeTaskText,
  }