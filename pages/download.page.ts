import { type Page } from '@playwright/test';

export class DownloadPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async openDownloadPage() {
        await this.page.goto('https://the-internet.herokuapp.com/download');
    }
    async downloadFile(fileName: string, savePath: string) {
        const [download] = await Promise.all([
            this.page.waitForEvent('download'),
            this.page.getByRole('link', { name: fileName, exact: true }).click(),
        ]);
        await download.saveAs(savePath);
    }
}
