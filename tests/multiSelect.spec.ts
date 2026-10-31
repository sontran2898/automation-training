import { test, expect } from '../fixtures/multiSelect.fixture';

test('TC05: Dropdown - Select multiple options', async ({ multiselectPage }) => {
    await multiselectPage.openMultiselectPage();
    await multiselectPage.selectmultipleOptions(['apple', 'banana']);
    await expect(multiselectPage.multiselect).toHaveValues(['apple', 'banana']);
});