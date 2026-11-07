import { test, expect } from '../fixtures/todo.fixture';

test('TC20: TodoMVC - Filter All/Active/Completed', async ({ todoPage }) => {
    await todoPage.openTodoPage();
    await todoPage.addTodo('Alpha');
    await todoPage.addTodo('Beta');
    await todoPage.toggleOf('Beta').click();

    await todoPage.activeFilter.click();
    await expect(todoPage.itemLabels).toHaveText(['Alpha']);

    await todoPage.completedFilter.click();
    await expect(todoPage.itemLabels).toHaveText(['Beta']);

    await todoPage.allFilter.click();
    await expect(todoPage.itemLabels).toHaveText(['Alpha', 'Beta']);
});
