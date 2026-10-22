import { test, expect } from '../fixtures/login.fixture';

test('TC01: Form Authentication - Login successful with valid credentials', async ({ loginPage }) => {
    await loginPage.openLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await expect(loginPage.flash).toContainText('You logged into a secure area!');
});

test('TC02: Form Authentication - Login fail with invalid credentials', async ({ loginPage }) => {
    await loginPage.openLoginPage();
    await loginPage.login('toms', 'SuperSecretPassword!');
    await expect(loginPage.flash).toContainText('Your username is invalid!');
});
