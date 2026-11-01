import * as fs from 'fs';
import { test, expect } from '../fixtures/download.fixture';

test('TC13: Download multiple files', async ({ downloadPage }) => {
    const fileNames = ['sample.txt', 'test.txt'];

    await downloadPage.openDownloadPage();

    for (const fileName of fileNames) {
        await downloadPage.downloadFile(fileName, `download/${fileName}`);
        expect(fs.existsSync(`download/${fileName}`)).toBe(true);
    }
});
