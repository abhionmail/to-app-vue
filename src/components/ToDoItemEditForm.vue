<template>
  <div class="col-lg-12">
    <form class="form" @submit.prevent="onSubmit">
      <div class="input-group input-group-lg">
        <input
          :id="id"
          type="text"
          autocomplete="off"
          class="input input-lg"
          v-model.lazy.trim="newLabel" />
          <select class="form-select" v-model="newPriority" @change="changePriority">
            <option value="">Select Priority</option>
            <option>critical</option>
            <option>moderate</option>
            <option>optional</option>
         </select>
         <div class="btn-group">
          <button type="submit" class="btn btn-lg btn-primary">
            <font-awesome-icon :icon="['fas', 'floppy-disk']" />
            <span class="visually-hidden">edit for {{label}}</span>
          </button>
          <button type="button" class="btn btn-lg btn-secondary" @click="onCancel">
            <font-awesome-icon :icon="['fas', 'rectangle-xmark']" />
            <span class="visually-hidden">editing {{label}}</span>
          </button>
         </div>
      </div>
      
    </form>
  </div>
</template>
<script>
  export default {
    name: "ToDoItemEditForm",
    props: {
      label: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      priority:{
        type: String,
        required: true,
      }
    },
    data() {
      return {
        newLabel: this.label,
        newPriority: this.priority,
      };
    },
    methods: {
      onSubmit() {
        if (this.newLabel && this.newLabel !== this.label || this.priority !== this.newPriority) {
          this.$emit("item-updated",{
            newLabel: this.newLabel,
            newPriority: this.newPriority,
            toDoId: this.id
          });
        }
      },
      onCancel() {
        this.$emit("edit-cancelled");
      },
      changePriority(e) {
        this.newPriority = e.target.value
      }
    },
  };
</script>
