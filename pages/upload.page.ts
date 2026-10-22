import { type Locator, type Page } from '@playwright/test';

export class UploadPage {
    readonly page: Page;
    readonly fileInput: Locator;
    readonly uploadButton: Locator;
    readonly uploadedFiles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fileInput = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.uploadedFiles = page.locator('#uploaded-files');
    }
    async openUploadPage() {
        await this.page.goto('https://the-internet.herokuapp.com/upload');
    }
    async uploadFile(filePath: string) {
        await this.fileInput.setInputFiles(filePath);
    }
    async clickUploadButton() {
        await this.uploadButton.click();
    }
}