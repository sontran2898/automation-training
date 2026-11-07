import { type Locator, type Page } from '@playwright/test';

export class BrokenImagesPage {
    readonly page: Page;
    readonly brokenImages: Locator;

    constructor(page: Page) {
        this.page = page;
        this.brokenImages = page.locator('img');
    }
    async openBrokenImagesPage() {
        await this.page.goto('https://the-internet.herokuapp.com/broken_images');
    }
    async getImageSources() {
        const sources: string[] = [];
        const count = await this.brokenImages.count();
        for (let i = 0; i < count; i++) {
            const src = await this.brokenImages.nth(i).getAttribute('src');
            sources.push(src ?? '');
        }
        return sources;
    }
}