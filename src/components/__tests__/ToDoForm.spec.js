import { describe, expect, test, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoForm from '../ToDoForm.vue'


describe("ToDoForm", function () {
  let wrapper;
  beforeEach(function () {
     wrapper = mount(TodoForm, {
       label:"",
       priority: "",
       id: "test-id-1234"
     });
  });

  test('emits todo-added on submitting a new todo', () => {
    wrapper.get('[data-test="form"]').trigger('submit');
  
    expect(wrapper.emitted()).toHaveProperty("todo-added");
  })

  test('emits todo-added on submitting a new todo', () => {
    wrapper.get('input').setValue('My first todo');
    wrapper.get('select').setValue('critical');
    wrapper.get('[data-test="form"]').trigger('submit');
  
    expect(wrapper.emitted("todo-added")[0]).toEqual([{
      label: 'My first todo',
      priority:'critical',
    }]);
  })
});

