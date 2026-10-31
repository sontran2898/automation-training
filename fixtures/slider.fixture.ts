import { test as base } from '@playwright/test';
import { SliderPage } from '../pages/slider.page';

export const test = base.extend<{sliderPage: SliderPage;}>({
    sliderPage: async ({ page }, use) => {
        const sliderPage = new SliderPage(page);
        await use(sliderPage);
    }
});

export { expect } from '@playwright/test';