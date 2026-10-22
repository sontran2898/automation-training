import { test as base } from '@playwright/test';
import { DropdownPage } from '../pages/dropdown.page';

export const test = base.extend<{ dropdownPage: DropdownPage }>({
    dropdownPage: async ({ page }, use) => {
        const dropdownPage = new DropdownPage(page);
        await use(dropdownPage);
    },
}); 

export { expect } from '@playwright/test';