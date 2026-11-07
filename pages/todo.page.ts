import { type Locator, type Page } from '@playwright/test';

export class TodoPage {
    readonly page: Page;
    readonly newTodoInput: Locator;
    readonly items: Locator;
    readonly itemLabels: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTodoInput = page.getByPlaceholder('What needs to be done?');
        this.items = page.getByTestId('todo-item');
        this.itemLabels = page.getByTestId('todo-item-label');
    }
    async openTodoPage() {
        await this.page.goto('https://todomvc.com/examples/react/dist/');
    }
    async addTodo(text: string) {
        await this.newTodoInput.fill(text);
        await this.newTodoInput.press('Enter');
    }
}