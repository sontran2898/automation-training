import { type Locator, type Page } from '@playwright/test';

export class StatusCodesPage {
    readonly page: Page;
    readonly message: Locator;

    constructor(page: Page) {
        this.page = page;
        this.message = page.locator('#content .example p');
    }
    async openStatusCodesPage() {
        await this.page.goto('https://the-internet.herokuapp.com/status_codes');
    }
    async clickStatusCode(statusCode: string) {
        await this.page.getByRole('link', { name: statusCode, exact: true }).click();
    }
    async clickHere() {
        await this.page.getByRole('link', { name: 'here' }).click();
    }
}
