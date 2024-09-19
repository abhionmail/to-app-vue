import { test, expect } from '@playwright/test';
//import TodoApp from "../../todo-app-vue/src/App.vue";

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('div.greetings > h1')).toHaveText('You did it!');
})


// test("should display component with empty input", async ({ mount, page }) => {
//   await page.goto('/');
//   //1. Mount the component
//   const component = await mount(TodoApp);

//   //2. Locate the search input 
//   const elem = await component.getByTestId('container');

//   //3. Verify the label and the initial value
//   await expect(elem).toBeVisible();
// })