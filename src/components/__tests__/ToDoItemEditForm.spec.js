import { describe, expect, test, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import ToDoItemEditForm from "../ToDoItemEditForm.vue"


describe("ToDoItemEditForm", function () {
  let wrapper;
  beforeEach(function () {
     wrapper = mount(ToDoItemEditForm, {
      props: {
        label:"test",
        priority: "moderate",
        id: "test-id-1234"
      }
     });
  });

  test('renders a todo edit item correctly', () => {
    const labelField = wrapper.get('input');
    const priorityField = wrapper.get('select');
  
    expect(labelField.exists()).toBe(true);
    expect(priorityField.exists()).toBe(true);
  })

  test('updates an existing todo and fires item-updated event ', () => {
    const labelField = wrapper.get('input');
    const priorityField = wrapper.get('select');
    labelField.setValue("update input");
    priorityField.setValue("critical")
    wrapper.find('form').trigger('submit');

    expect(wrapper.emitted("item-updated")[0]).toEqual([{
      newLabel: "update input",
      newPriority:"critical",
      toDoId:"test-id-1234"
    }]);
  })
});

