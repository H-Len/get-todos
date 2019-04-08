//Business logic

function TaskList() {
  this.todos = [];
  this.currentId = 0;
}

TaskList.prototype.addTodo = function(todo) {
  todo.id = this.assignId();
  this.todos.push(todo);
}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

function ToDo(task) {
  this.task = task;
  this.status = "Incomplete";
}

ToDo.prototype.changeTodoStatus = function() {
  this.status = "complete";
}



//UI logic
$(function() {
  var tasklist = new TaskList;
  $("form").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#task").val();

    if (!taskInput) {
      alert("You must enter a task to submit.")
    }
    var todo = new ToDo(taskInput);
    tasklist.addTodo(todo);
    $('input#task').val('');
    $('#incomplete').append('<li>' + taskInput + '</li>');

    $("form").reset();
  });
});
