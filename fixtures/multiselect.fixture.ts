import { test as base } from '@playwright/test';
import { MultiselectPage } from '../pages/multiselect.page';

export const test = base.extend<{multiselectPage: MultiselectPage;
}>({
    multiselectPage: async ({ page }, use) => {
        const multiselectPage = new MultiselectPage(page);
        await use(multiselectPage);
    }
});

export { expect } from '@playwright/test';
