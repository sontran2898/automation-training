import { test, expect } from '../fixtures/todo.fixture';

test('TC16: TodoMVC - Mark todo as completed', async ({ todoPage }) => {
    await todoPage.openTodoPage();
    await todoPage.addTodo('Buy milk');
    await todoPage.toggleOf('Buy milk').click();
    await expect(todoPage.toggleOf('Buy milk')).toBeChecked();
    await expect(todoPage.footer).toContainText('0 items left');
});
