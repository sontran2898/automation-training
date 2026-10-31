import { test, expect } from '../fixtures/webTable.fixture';

test('TC08: Web Table - Validate largest due person from a table', async ({ webTablePage }) => {
    await webTablePage.openWebTablePage();
    const people = await webTablePage.getPeople();
    const largestDuePerson = await webTablePage.getLargestDuePerson();

    const maxDue = Math.max(...people.map(person => person.due));
    expect(largestDuePerson.due).toBe(maxDue);

    const rowWithMaxDue = webTablePage.rows.filter({ hasText: `$${maxDue.toFixed(2)}` });
    await expect(rowWithMaxDue).toContainText(largestDuePerson.firstName);
    await expect(rowWithMaxDue).toContainText(largestDuePerson.lastName);
});
