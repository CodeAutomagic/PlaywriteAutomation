const { test, expect } = require('@playwright/test');

test('navigation: basic page load and back/forward', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);

  // navigate to a second hash and back
  await page.goto('https://example.com/#second');
  await expect(page).toHaveURL(/#second/);
  await page.goBack();
  await expect(page).toHaveURL('https://example.com/');
});
