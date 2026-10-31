import { test, expect } from '../fixtures/statusCodes.fixture';

test('TC06: Hyperlink - Status codes navigation', async ({ statusCodesPage }) => {
    await statusCodesPage.openStatusCodesPage();

    await statusCodesPage.clickStatusCode('200');
    await expect(statusCodesPage.message).toContainText('This page returned a 200 status code.');
    await statusCodesPage.clickHere();

    await statusCodesPage.clickStatusCode('301');
    await expect(statusCodesPage.message).toContainText('This page returned a 301 status code.');
    await statusCodesPage.clickHere();

    await statusCodesPage.clickStatusCode('404');
    await expect(statusCodesPage.message).toContainText('This page returned a 404 status code.');
    await statusCodesPage.clickHere();

    await statusCodesPage.clickStatusCode('500');
    await expect(statusCodesPage.message).toContainText('This page returned a 500 status code.');
    await statusCodesPage.clickHere();
});
