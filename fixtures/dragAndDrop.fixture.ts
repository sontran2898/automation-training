import { test as base } from '@playwright/test';
import { DragAndDropPage } from '../pages/dragAndDrop.page';

export const test = base.extend<{dragAndDropPage: DragAndDropPage;}>({
    dragAndDropPage: async ({ page }, use) => {
        const dragAndDropPage = new DragAndDropPage(page);
        await use(dragAndDropPage);
    }
});

export { expect } from '@playwright/test';