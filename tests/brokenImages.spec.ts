import { test, expect } from '../fixtures/brokenImages.fixture';

test('TC14: Detect broken images', async ({ brokenImagesPage, request }) => {
    await brokenImagesPage.openBrokenImagesPage();
    const sources = await brokenImagesPage.getImageSources();

    for (const src of sources) {
        const response = await request.get(`https://the-internet.herokuapp.com/${src}`);
        expect.soft(response.status(), `Image: ${src}`).toBe(200);
    }
});
