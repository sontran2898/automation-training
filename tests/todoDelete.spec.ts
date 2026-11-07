import { test, expect } from '../fixtures/todo.fixture';

test('TC17: TodoMVC - Delete a todo', async ({ todoPage }) => {
    await todoPage.openTodoPage();
    await todoPage.addTodo('Pay bills');
    await todoPage.todoItem('Pay bills').hover();
    await todoPage.deleteButtonOf('Pay bills').click();
    await expect(todoPage.todoItem('Pay bills')).toHaveCount(0);
});
