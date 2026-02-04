const { test, expect } = require('@playwright/test');

test('locators: text, role and css selectors', async ({ page }) => {
  await page.goto('https://example.com');

  // text selector
  const heading = page.locator('h1');
  await expect(heading).toHaveText('Example Domain');

  // CSS selector
  await expect(page.locator('p')).toContainText('illustrative examples');
});
