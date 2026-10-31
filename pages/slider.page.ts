import { type Locator, type Page } from '@playwright/test';

export class SliderPage {
    readonly page: Page;
    readonly slider: Locator;
    readonly sliderValue: Locator;

    constructor(page: Page) {
        this.page = page;
        this.slider = page.locator('input[type=range]');
        this.sliderValue = page.locator('#range');
    }
    async openSliderPage() {
        await this.page.goto('https://the-internet.herokuapp.com/horizontal_slider');
    }
    async setSliderValue(target: number) {
        await this.slider.focus();
        while (parseFloat(await this.sliderValue.innerText()) < target) {
            await this.slider.press('ArrowRight');
        }
    }
}
