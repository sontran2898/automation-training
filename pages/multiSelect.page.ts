import { type Locator, type Page } from '@playwright/test';

export class MultiselectPage {
    readonly page: Page;
    readonly multiselect: Locator;

    constructor(page: Page) {
        this.page = page;
        this.multiselect = page.locator('#fruits');
    }   
    async openMultiselectPage() {
        await this.page.goto('https://output.jsbin.com/osebed/2');
    }

    async selectmultipleOptions(optionTexts: string[]) {
        await this.multiselect.selectOption(optionTexts);
    }
}