import { type Locator, type Page } from '@playwright/test';

export class DropdownPage {
    readonly page: Page;
    readonly dropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }
    async openDropdownPage() {
        await this.page.goto('https://the-internet.herokuapp.com/dropdown');
    }

    async selectOption(optionText: string) {
        await this.dropdown.selectOption(optionText);
    }
}