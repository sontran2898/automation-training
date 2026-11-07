import { test, expect } from '../fixtures/todo.fixture';

test('TC15: TodoMVC - Add new todos', async ({ todoPage }) => {
    await todoPage.openTodoPage();
    await todoPage.addTodo('Buy milk');
    await todoPage.addTodo('Buy groceries');
    await expect(todoPage.items).toHaveCount(2);
    await expect(todoPage.itemLabels).toHaveText(['Buy milk', 'Buy groceries']);
});
