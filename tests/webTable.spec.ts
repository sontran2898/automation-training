import { test, expect } from '../fixtures/webTable.fixture';

test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {
    await webTablePage.openWebTablePage();
    const largestDuePerson = await webTablePage.getLargestDuePerson();
    expect(largestDuePerson).toEqual({ firstName: 'Jason', lastName: 'Doe', due: 100.00 });
});
