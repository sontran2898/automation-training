import { test as base } from '@playwright/test';
import { CheckboxesPage } from '../pages/checkboxes.page';

export const test = base.extend<{ checkboxesPage: CheckboxesPage }>({
    checkboxesPage: async ({ page }, use) => {
        const checkboxesPage = new CheckboxesPage(page);
        await use(checkboxesPage);
    },
});

export { expect } from '@playwright/test';