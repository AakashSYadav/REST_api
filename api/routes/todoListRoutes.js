'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/tasks/:mynum/:lat/:lon/:lux')
    // app.route('/tasks/:mynum/:num3')

    .get(todoList.read_a_task)

  app.route('newpath')
  	.get()
    
};
