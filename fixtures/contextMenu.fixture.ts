import { test as base } from '@playwright/test';
import { ContextMenuPage } from '../pages/contextMenu.page';

export const test = base.extend<{ contextMenuPage: ContextMenuPage }>({
    contextMenuPage: async ({ page }, use) => {
        const contextMenuPage = new ContextMenuPage(page);
        await use(contextMenuPage);
    },
});

export { expect } from '@playwright/test';
