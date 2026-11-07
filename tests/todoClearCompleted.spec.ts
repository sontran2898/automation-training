import { test, expect } from '../fixtures/todo.fixture';

test('TC19: TodoMVC - Clear completed todos', async ({ todoPage }) => {
    await todoPage.openTodoPage();

    for (const task of ['Task A', 'Task B', 'Task C']) {
        await todoPage.addTodo(task);
    }

    await todoPage.toggleOf('Task B').click();
    await todoPage.toggleOf('Task C').click();
    await todoPage.clearCompletedButton.click();

    await expect(todoPage.itemLabels).toHaveText(['Task A']);
    await expect(todoPage.footer).toContainText('1 item left');
});
