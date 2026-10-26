import { type Locator, type Page } from '@playwright/test';

export class DragAndDropPage {
    readonly page: Page;
    readonly columnA: Locator;
    readonly columnB: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.columnA = page.locator('#column-a');
        this.columnB = page.locator('#column-b');
    }
    async openDragAndDropPage() {
        await this.page.goto('https://the-internet.herokuapp.com/drag_and_drop');
    }
    async dragAtoB() {
        await this.columnA.dragTo(this.columnB);
    }
}  