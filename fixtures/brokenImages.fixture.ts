import { test as base } from '@playwright/test';
import { BrokenImagesPage } from '../pages/brokenImages.page';

export const test = base.extend<{ brokenImagesPage: BrokenImagesPage }>({
    brokenImagesPage: async ({ page }, use) => {
        const brokenImagesPage = new BrokenImagesPage(page);
        await use(brokenImagesPage);
    },
});

export { expect } from '@playwright/test';
