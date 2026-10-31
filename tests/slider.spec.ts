import { test, expect } from '../fixtures/slider.fixture';

test('TC10: Horizontal Slider - Set value to 3.5', async ({ sliderPage }) => {
    await sliderPage.openSliderPage();
    await sliderPage.setSliderValue(3.5);
    await expect(sliderPage.slider).toHaveValue('3.5');
});
