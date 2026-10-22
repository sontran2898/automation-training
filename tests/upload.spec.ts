import { test, expect } from '../fixtures/upload.fixture';

test('TC07: Upload a file', async ({ uploadPage }) => {
    await uploadPage.openUploadPage();
    await uploadPage.uploadFile('download/bb.txt');
    await uploadPage.clickUploadButton();
    await expect(uploadPage.uploadedFiles).toContainText('bb.txt');
});
