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

TaskList.prototype.findTodo = function(id) {
  for (var i = 0; i < this.todos.length; i++) {
    if (this.todos[i] && this.todos[i].id === id) {
      return this.todos[i]
    }
  }
  return false;
}

function ToDo(task) {
  this.task = task;
  this.status = "Incomplete";
}

ToDo.prototype.changeTodoStatus = function() {
  this.status = "complete";
}



//UI logic
$(function() {
  var taskList = new TaskList;
  $("form").submit(function(event) {
    event.preventDefault();
    var taskInput = $("input#task").val();

    if (!taskInput) {
      alert("You must enter a task to submit.")
    }
    var todo = new ToDo(taskInput);
    taskList.addTodo(todo);
    $('input#task').val('');
    $('ol').append('<li id="'+ todo.id +'">' + taskInput + '</li>');
    console.log(todo.id);
    console.log(taskList);

    $("#" + todo.id).on("click", function() {
      $(this).addClass('complete');
      let id = this.id;
      console.log(id);
    })

  });



});
