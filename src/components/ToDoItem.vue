<template>
      <div class="col-lg-12">
        <span :for="id" data-test="label" class="label-light">{{label}}</span>
        <div class="vr"></div>
        <span data-test="priority" class="label fs-6 fst-italic">{{ priority }}</span>
        
        <div class="btn-group">
          <button type="button" data-test="editItem" class="btn btn-lg btn-primary" @click="toggleToItemEditForm">
            <font-awesome-icon :icon="['fas', 'fa-pen']" /> <span class="visually-hidden">{{label}}</span>
          </button>
          <button type="button" data-test="removeItem" class="btn btn-lg btn-danger" @click="deleteToDo">
            <font-awesome-icon :icon="['fas', 'trash']" /> <span class="visually-hidden">{{label}}</span>
          </button>
        </div>
      </div>
</template>


<script>
  export default {
    name: 'TodoItem',
    props: {
      label: { required: true, type: String },
      priority: { default: "", type: String },
      id: { required: true, type: String },
    },
    data() {
      return {
        isEditing: ""
      };
    },
    methods: {
      deleteToDo() {
        this.$emit('remove-todo', this.id);
      },
      toggleToItemEditForm() {
        this.$emit('edit-todo', this.id);
      }
    }
  };
</script>