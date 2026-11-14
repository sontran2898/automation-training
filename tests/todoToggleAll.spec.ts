import { test, expect } from '../fixtures/todo.fixture';

test('TC22: TodoMVC - Toggle all', async ({ todoPage }) => {
    const todos = ['Task One', 'Task Two'];

    // Step 1-2: Open the browser and navigate to the TodoMVC page
    await todoPage.openTodoPage();

    // Step 3: Add 2 todos: "Task One", "Task Two"
    for (const todo of todos) {
        await todoPage.addTodo(todo);
    }

    // Step 4: Check the "toggle all" checkbox
    await todoPage.toggleAll.check();

    // Step 5: Verify footer shows "0 items left"
    await expect(todoPage.footer).toContainText('0 items left');

    // Step 6: Uncheck the "toggle all" checkbox
    await todoPage.toggleAll.uncheck();

    // Step 7: Verify footer shows "2 items left"
    await expect(todoPage.footer).toContainText(`${todos.length} items left`);
});
