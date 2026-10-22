import { test as base } from '@playwright/test';
import { StatusCodesPage } from '../pages/statuscodes.page';

export const test = base.extend<{statusCodesPage: StatusCodesPage;}>({
    statusCodesPage: async ({ page }, use) => {
        const statusCodesPage = new StatusCodesPage(page);
        await use(statusCodesPage);
    }
});

export { expect } from '@playwright/test';