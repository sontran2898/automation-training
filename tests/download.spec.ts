import * as fs from 'fs';
import { test, expect } from '../fixtures/download.fixture';

test('TC12: Download a single file', async ({ downloadPage }) => {
    await downloadPage.openDownloadPage();
    await downloadPage.downloadFile('image.jpeg', 'download/image.jpeg');
    expect(fs.existsSync('download/image.jpeg')).toBe(true);
});
