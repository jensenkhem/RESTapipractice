module.exports = function(app) {
    // Get the toDoListObject from controller module
    const todoList = require('../controllers/toDoListController');

    //todoList routes!
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);
    
    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);
};