import { type Locator, type Page } from '@playwright/test';

export class ContextMenuPage {
    readonly page: Page;
    readonly hotSpot: Locator;

    constructor(page: Page) {
        this.page = page;
        this.hotSpot = page.locator('#hot-spot');
    }
    async openContextMenuPage() {
        await this.page.goto('https://the-internet.herokuapp.com/context_menu');
    }
    async rightClickHotSpotAndGetAlertMessage() {
        let alertMessage = '';
        this.page.once('dialog', async dialog => {
            alertMessage = dialog.message();
            await dialog.dismiss();
        });
        await this.hotSpot.click({ button: 'right' });
        return alertMessage;
    }
}
