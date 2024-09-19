const STORAGE_KEY = "todo-app";
const todoStorage = {
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    // todos.forEach(function(todo, index) {
    //   todo.id = index;
    // });
    // todoStorage.uid = todos.length;
    return todos;
  },
  save: function(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};


export default function() {
  return {
    todoStorage: todoStorage
  }
}

