import { type Locator, type Page } from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly newTodoInput: Locator;
    readonly items: Locator;
    readonly itemLabels: Locator;
    readonly footer: Locator;
    readonly clearCompletedButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.newTodoInput = page.getByPlaceholder('What needs to be done?');
        this.items = page.getByTestId('todo-item');
        this.itemLabels = page.getByTestId('todo-item-label');
        this.footer = page.getByTestId('footer');
        this.clearCompletedButton = page.getByRole('button', { name: 'Clear completed' });

    }
    async openTodoPage() {
        await this.page.goto('https://todomvc.com/examples/react/dist/');
    }
    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
    }
    todoItem(text: string): Locator {
        return this.items.filter({ hasText: text });
    }
    toggleOf(text: string): Locator {
        return this.todoItem(text).getByTestId('todo-item-toggle');
    }
    deleteButtonOf(text: string): Locator {
        return this.todoItem(text).getByTestId('todo-item-button');
    }
    labelOf(text: string): Locator {
        return this.todoItem(text).getByTestId('todo-item-label');
    }
    editInputOf(text: string): Locator {
        return this.todoItem(text).getByLabel('Edit todo');
    }
}
