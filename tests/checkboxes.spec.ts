import { test, expect } from '@playwright/test';

test('TC03: Checkboxes - Check to a box', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    await page.getByRole('checkbox').nth(0).check();
    await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
    await page.getByRole('checkbox').nth(1).check();
    await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
});
