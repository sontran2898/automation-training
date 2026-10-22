import { test as base } from '@playwright/test';
import { UploadPage } from '../pages/upload.page';

export const test = base.extend<{uploadPage: UploadPage;}>({
    uploadPage: async ({ page }, use) => {
        const uploadPage = new UploadPage(page);
        await use(uploadPage);
    }
});

export { expect } from '@playwright/test';