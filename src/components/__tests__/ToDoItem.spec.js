import { describe, expect, test, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import TodoItem from "../ToDoItem.vue"


describe("ToDoItem", function () {
  let wrapper;
  beforeEach(function () {
     wrapper = mount(TodoItem, {
      props: {
        label:"test",
        priority: "moderate",
        id: "test-id-1234"
      }
     });
  });

  test('renders a todo item correctly', () => {
    const label = wrapper.get('[data-test="label"]');
    const priority = wrapper.get('[data-test="priority"]');
  
    expect(label.text()).toEqual('test');
    console.log(label)
    expect(priority.text()).toEqual('moderate');
  })

  test('emits remove-todo on removing an existing todo', () => {
    wrapper.get('[data-test="removeItem"]').trigger('click');

   expect(wrapper.emitted("remove-todo")[0]).toEqual(['test-id-1234']);
  })

  test('emits edit-todo on editing an existing todo', () => {
    wrapper.get('[data-test="editItem"]').trigger('click');
  
    expect(wrapper.emitted("edit-todo")[0]).toEqual(['test-id-1234']);
  })

});

