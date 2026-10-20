import { test, expect } from './fixtures/checkboxes.fixture';

test('TC03: Checkboxes - Check to a box', async ({ checkboxesPage }) => {
    await checkboxesPage.openCheckboxesPage();
    await checkboxesPage.checkBox(0);
    await expect(checkboxesPage.checkbox.nth(0)).toBeChecked();
    await checkboxesPage.checkBox(1);
    await expect(checkboxesPage.checkbox.nth(1)).toBeChecked();
});
