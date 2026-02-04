const { test, expect } = require('@playwright/test');
const path = require('path');

test('downloads and uploads: example', async ({ page }) => {
  // downloads: create a blob link and download it
  await page.setContent(`
    <a id="dl" href="data:text/plain,hello" download="hello.txt">dl</a>
  `);
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.click('#dl'),
  ]);
  const savePath = path.join(process.cwd(), 'tmp-hello.txt');
  await download.saveAs(savePath);

  // uploads: create an input and set files (no real file required for demo)
  await page.setContent(`<input id='up' type='file' />`);
  const filePath = savePath; // reuse saved file
  await page.setInputFiles('#up', filePath);
  expect(await page.$('#up')).not.toBeNull();
});
