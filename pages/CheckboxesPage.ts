import { type Locator, type Page } from '@playwright/test';

export class CheckboxesPage {
    readonly page: Page;
    readonly checkbox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkbox = page.getByRole('checkbox');
    }
    async openCheckboxesPage() {
        await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
    }
    async checkBox(index: number) {
        await this.checkbox.nth(index).check();
    }

}
