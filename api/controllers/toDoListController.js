const mongoose = require('mongoose');
const Task = mongoose.model('Tasks'); // Get the task schema we created in mongoose!

// Function to get all of the tasks in our DB
exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if(err) {
            res.send(err);
        }
        res.json(task);
    });
};

/* Function to create a new task in our DB
* - Sends back the new task object
*/
exports.create_a_task = function(req, res) {
    var new_task = new Task(req.body);
    new_task.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
/* Function to get a specific task in the DB given a task ID
*  - Sends back the task object
*/
exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
/* Function to update a task in the DB
* - Sends back the updated task object
*/
exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
  
/* Function to remove a task in the DB
* - Sends back a message if task was deleted successfully
*/  
exports.delete_a_task = function(req, res) {
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };
  