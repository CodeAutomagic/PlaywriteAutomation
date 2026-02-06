const { test, expect } = require('@playwright/test');

test('locators: text, role and css selectors', async ({ page }) => {
  await page.goto('https://example.com');

  // text selector
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // CSS selector - use the first paragraph and assert a stable substring
  await expect(page.locator('p').first()).toContainText('documentation');
});
