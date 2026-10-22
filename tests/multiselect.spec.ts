import { test, expect } from '../fixtures/multiselect.fixture';

test('TC05: Dropdown - Select multiple options', async ({ multiselectPage }) => {
    await multiselectPage.selectmultipleOptions(['apple', 'banana']);
    await expect(multiselectPage.multiselect).toHaveValues(['apple', 'banana']);
});