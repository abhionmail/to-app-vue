<script>
  import ToDoItem from "./components/ToDoItem.vue";
  import ToDoForm from "./components/ToDoForm.vue";
  import ToDoItemEditForm from "./components/ToDoItemEditForm.vue";
  import { nanoid } from "nanoid";
  import utils from "../src/utils";

  const todoStorage = utils().todoStorage;

  export default {
    name: "TodoApp",
    components: {
      ToDoItem, ToDoForm, ToDoItemEditForm
    },
    data() {
      return {
        ToDoItems:todoStorage.fetch(),
        isEditing: "",
        label: "",
        priority: ""
      };
    },
    methods: {
      addToDo({label, priority}) {
        console.log(label + ": " + priority);
        this.ToDoItems.push({id: "todo-" + nanoid(), label, done: false, priority });
      },
      updateToDo({toDoId, newLabel, newPriority}) {
        const toDoToEdit = this.ToDoItems.find((item) => item.id === toDoId);
        toDoToEdit.label = newLabel;
        toDoToEdit.priority = newPriority;
        this.isEditing = "";
      },
      removeToDo(id) {
        this.ToDoItems = this.ToDoItems.filter(todo => todo.id !== id);
      },
      editToDo(id) {
        this.isEditing = id;
      },
      editCancelled() {
        this.isEditing = "";
      },
      deleteAll() {
        this.ToDoItems = [] ;
      },
      sortByPriority() {
        const priorityMap = {
          "critical" : 1,
          "moderate" : 2,
          "optional" : 3,
        }
        this.ToDoItems.sort((task1, task2) => priorityMap[task1.priority] >  priorityMap[task2.priority] ? 1 : -1) ;
      }
    },
    watch: {
      ToDoItems: {
        handler: function(todos) {
          todoStorage.save(todos);
        },
        deep: true
      }
    }
  };

</script>

<template>
  <div class="container" data-testid="container">
    <h1>Tasks for today</h1>
    <to-do-form @todo-added="addToDo"></to-do-form>
    <div class="list-wrapper header-btns">
      <div class="btn-group">
        <button  class="btn btn-lg btn-danger" @click="deleteAll">Clear All <font-awesome-icon :icon="['fas', 'trash']" /></button>
        <button class="btn btn-lg btn-secondary" @click="sortByPriority"> Sort by Priority</button>
      </div>
    </div>
    
    <div class="list-wrapper"> 
      <ul class="list-group todos mx-auto text-light delete">
        <li v-for="item in ToDoItems" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
          <to-do-item
            v-if="!(isEditing === item.id)"
            :label="item.label"
            :done="item.done"
            :id="item.id" 
            :priority="item.priority" 
            @remove-todo="removeToDo"
            @edit-todo="editToDo">
          </to-do-item>
          <to-do-item-edit-form
            v-else
            :id="item.id"
            :label="item.label"
            :priority="item.priority"
            @item-updated="updateToDo"
            @edit-cancelled="editCancelled">
          </to-do-item-edit-form>
        </li>
      </ul>
    </div>
  </div>
</template>
