import { test, expect } from '../fixtures/dropdown.fixture';

test('TC04: Dropdown - Select single option', async ({ dropdownPage }) => {
    await dropdownPage.openDropdownPage();
    await dropdownPage.selectOption('Option 1');
    await expect(dropdownPage.dropdown).toHaveValue('1');

});