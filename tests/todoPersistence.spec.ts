import { test, expect } from '../fixtures/todo.fixture';

test('TC21: TodoMVC - Persistence across page refresh', async ({ todoPage }) => {
    const todoName = 'Call mom';

    // Step 1-2: Open the browser and navigate to the TodoMVC page
    await todoPage.openTodoPage();

    // Step 3: Add a todo named "Call mom"
    await todoPage.addTodo(todoName);

    // Step 4: Verify "Call mom" appears in the list
    await expect(todoPage.itemLabels).toHaveText([todoName]);

    // Step 5: Reload the page
    await todoPage.reloadPage();

    // Step 6: Verify "Call mom" still exists in the list
    await expect(todoPage.itemLabels).toHaveText([todoName]);
});
