<template>
  <div class="todo-form-container">
    <form class="form" data-test="form" @submit.prevent="onSubmit">
      <div class="input-group input-group-lg">
        <input
          type="text"
          id="new-todo-input"
          name="new-todo"
          autocomplete="off"
          v-model="label"
          data-test="new-todo"
          placeholder="Add a new task"
          class="input input-lg" />
        <select class="form-select" v-model="priority" @click="changePriority" name="priority">
          <option value="">Select Priority</option>
          <option value="critical">critical</option>
          <option value="moderate">moderate</option>
          <option value="optional">optional</option>
        </select>
        <button type="submit" class="btn btn-primary btn-lg"><font-awesome-icon :icon="['fas', 'square-plus']" /></button>
      </div>  
   </form>
  </div>
</template>


<script>
  export default {
   name: "ToDoForm", 
    props: {
      label: { required: true, type: String },
      priority: { default: "", type: String },
      id: { required: true, type: String }
    },
    methods: {
      onSubmit() {
        this.$emit('todo-added', {label: this.label, priority: this.priority})
        console.log("form submitted" + this.label + "");
        this.label = "";
        this.priority = "";
      },
      changePriority(e) {
        this.priority = e.target.value;
      }
    },
    data() {
      return {
        label: "",
        priority: ""
      };
    },
  };
</script>

