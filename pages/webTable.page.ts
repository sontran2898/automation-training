import { type Locator, type Page } from '@playwright/test';

export class WebTablePage {
    readonly page: Page;
    readonly rows: Locator;

    constructor(page: Page) {
        this.page = page;
        this.rows = page.locator('table#table1 tbody tr');
    }
    async openWebTablePage() {
        await this.page.goto('https://the-internet.herokuapp.com/tables');
    }
    async getPeople() {
        const people: { firstName: string; lastName: string; due: number }[] = [];
        const count = await this.rows.count();
        for (let i = 0; i < count; i++) {
            const row = this.rows.nth(i);
            const lastName = await row.locator('td').nth(0).innerText();
            const firstName = await row.locator('td').nth(1).innerText();
            const dueText = await row.locator('td').nth(3).innerText();
            people.push({ firstName, lastName, due: Number(dueText.replace('$', '')) });
        }
        return people;
    }
    async getLargestDuePerson() {
        const people = await this.getPeople();
        let largest = people[0];
        for (const person of people) {
            if (person.due > largest.due) {
                largest = person;
            }
        }
        return largest;
    }
}
