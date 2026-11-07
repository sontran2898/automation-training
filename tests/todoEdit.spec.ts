import { test, expect } from '../fixtures/todo.fixture';

test('TC18: TodoMVC - Edit/rename a todo', async ({ todoPage }) => {
    await todoPage.openTodoPage();
    await todoPage.addTodo('Walk the dog');
    await todoPage.labelOf('Walk the dog').dblclick();
    await todoPage.editInputOf('Walk the dog').fill('Walk the dog (30 min)');
    await todoPage.editInputOf('Walk the dog').press('Enter');
    await expect(todoPage.itemLabels).toHaveText(['Walk the dog (30 min)']);
});
