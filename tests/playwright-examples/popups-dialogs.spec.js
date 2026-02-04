const { test, expect } = require('@playwright/test');

test('popups and dialogs: example of popup handling', async ({ page, context }) => {
  await page.setContent(`<a id="open" href="#" target="_blank">open</a>`);
  const [popup] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#open'),
  ]);
  await popup.waitForLoadState();
  await expect(popup).toHaveTitle(/about:blank|/);

  // dialog example
  page.once('dialog', dialog => dialog.accept());
  await page.evaluate(() => alert('hi'));
});
